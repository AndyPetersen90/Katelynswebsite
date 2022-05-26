//here we take in the server file functions and those perform sequilize requests.

require("dotenv").config();
const Sequelize = require("sequelize")

const {CONNECTION_STRING} = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false //normally this will be set to true
        }
    }
})

module.exports = {

    getPortfolioMain: (req, res) => {
        sequelize.query(`SELECT * FROM portfolio_main`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
            console.log(dbRes[0])
        })
        .catch((err) => {
            console.error(err)
        })
    },

    getPortfolioWinter: (req, res) => {
        sequelize.query(`
        SELECT * FROM portfolio_winter`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.error(err)
        })
    },

    getPortfolioSpring: (req, res) => {
        sequelize.query(`
        SELECT * FROM portfolio_spring`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.error(err)
        })
    },

    getPortfolioSummer: (req, res) => {
        sequelize.query(`
        SELECT * FROM portfolio_summer`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.error(err)
        })
    },

    getPortfolioFall: (req, res) => {
        sequelize.query(`
        SELECT * FROM portfolio_fall`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.error(err)
        })
    }






}
