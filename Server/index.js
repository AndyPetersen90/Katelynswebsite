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

app.use("/", express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.css"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/services.html"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/share.html"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/portfolio.js"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/share.js"))
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