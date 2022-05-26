//Here we receive the axios requests and direct them to the correct
//function in the controller file.

require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getPortfolioMain, getPortfolioSpring, getPortfolioSummer, getPortfolioWinter, getPortfolioFall} = require('./controller.js')


app.use(express.json())
app.use(cors())

//portfolio requests//
app.get('/portfolio_main', getPortfolioMain);
app.get('/portfolio_winter', getPortfolioWinter);
app.get('/portfolio_spring', getPortfolioSpring);
app.get('/portfolio_summer', getPortfolioSummer);
app.get('/portfolio_fall', getPortfolioFall);




//contact requests//





//server//
app.post('/seed', seed)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))