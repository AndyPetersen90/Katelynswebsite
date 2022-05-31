//Here we receive the axios requests and direct them to the correct
//function in the controller file.

require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getPosts, createPost, deletePost} = require('./controller.js')


app.use(express.json())
app.use(cors())

//portfolio requests//


//contact requests//
app.get('/posts', getPosts);
app.post('/posts', createPost);
app.delete('/posts/:id', deletePost)

//server//
app.post('/seed', seed)

const port = process.env.PORT || 5005

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})