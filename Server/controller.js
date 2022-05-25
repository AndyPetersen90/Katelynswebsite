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
