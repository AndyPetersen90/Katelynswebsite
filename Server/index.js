//Here we receive the axios requests and direct them to the correct
//function in the controller file.

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express()
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getPosts, createPost, deletePost} = require('./controller.js')

app.use("/", express.static(path.join(__dirname, "../Public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/index.html"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/portfolio.html"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/index.css"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/services.html"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/share.html"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/portfolio.js"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/share.js"))
})


app.use(express.json())
app.use(cors())


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