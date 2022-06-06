
const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express()
const {seed} = require('./seed.js')
const {getPosts, createPost, deletePost} = require('./controller.js')

require('dotenv').config()
app.use(express.json())
app.use(cors())

app.use("/", express.static(path.join(__dirname, "../Public")));

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/index.html"))
})
app.get("/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/portfolio.html"))
})
app.get("/services", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/services.html"))
})
app.get("/share", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/share.html"))
})

//contact requests//
app.get('/posts', getPosts);
app.post('/posts', createPost);
app.delete('/posts/:id', deletePost)

//server//
app.post('/seed', seed)


// const port = process.env.PORT || 5005

// app.listen(port, () => {
//     console.log(`Listening on ${port}`)
// })

app.listen(process.env.PORT || 5005, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });