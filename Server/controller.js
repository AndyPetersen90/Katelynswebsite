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

    getPosts: (req, res) => {
        sequelize.query(`SELECT * FROM posts`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err);
        })
    },

    createPost: (req, res) => {
        console.log(req.body);
        const {name, url, comments} = req.body;

        sequelize.query(`INSERT INTO posts(name, url, comments)
            VALUES ('${name}', '${url}', '${comments}')
            RETURNING *;`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },

    deletePost: (req, res) => {
        console.log(req.params)
        sequelize.query(
            `DELETE
            FROM posts
            WHERE post_id = '${req.params.id}'`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0]);
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
