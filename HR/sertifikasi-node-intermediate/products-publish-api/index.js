const express = require('express')
const app = express()
const postsRoute = require('./routes/posts')

app.use(('/posts'), postsRoute)

app.listen(3333, () => {
    console.log('server jalan di port 3333');
})