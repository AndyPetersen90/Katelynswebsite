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
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists posts;

            create table posts (
                post_id serial primary key, 
                name varchar(100), 
                url string, 
                comments varchar(), 
            );

            insert into posts ()


        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}