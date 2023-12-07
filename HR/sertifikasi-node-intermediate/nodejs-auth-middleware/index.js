const express = require('express')
const app = express()
const router = express.Router();
const middleware = require('./middleware')

router.get('/create', middleware('tasks.getById'),() => {
    console.log('masuk create');
})

app.use(router)

app.listen(3333, () => {
    console.log('server jalan di port 3333');
})