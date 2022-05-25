//Here we receive the axios requests and direct them to the correct
//function in the controller file.

require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path');
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {} = require('./controller.js')








app.post('/seed', seed)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))