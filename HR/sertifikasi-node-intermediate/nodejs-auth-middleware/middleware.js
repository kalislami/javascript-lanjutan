const ROLES_FILE = __dirname + '/roles.txt';
const fs = require('fs')

const checkRole = (mapper, localScope, action, role) => {
    for (let i in mapper) {
        const iRole = mapper[i].role
        if (role === iRole) {
            const {scopes} = mapper[i];
            console.log(localScope);
            console.log(scopes);

            if (scopes[localScope]) {
                return scopes[localScope].includes(action)
            }
        }
    }

    return false
}

module.exports = (scope) => (req, res, next) => {
    const role = req.headers['x-role'];
    // console.log(role);

    if (role) {
        fs.readFile(ROLES_FILE, 'utf-8', (err, data) => {
            if (err) {
                res.status(400).send()
            }
            
            // console.log(data);
            const [localScope, action] = scope.split(".")
            const mapper = JSON.parse(data.toString("utf-8").replace(/^\uFEFF/, ""))
            const isAllowed = checkRole(mapper, localScope, action, role)
            // console.log(mapper);
            if (isAllowed) {
                res.status(200).send()
                next()
            }
            else {
                res.status(403).send()
            }
        })
    }
    else {
        res.status(403).json()
    }
}