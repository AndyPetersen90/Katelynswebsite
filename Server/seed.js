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
            drop table if exists portfolio_main;
            drop table if exists portfolio_winter;
            drop table if exists portfolio_spring;
            drop table if exists portfolio_summer;
            drop table if exists portfolio_fall;


            create table posts (
                post_id serial primary key, 
                name varchar(100), 
                url text, 
                comments varchar(200)
            );

            create table portfolio_main (
                main_id serial primary key,
                url text
            );

            create table portfolio_winter (
                main_id serial primary key,
                url text
            );

            create table portfolio_spring (
                main_id serial primary key,
                url text
            );
            
            create table portfolio_summer (
                main_id serial primary key,
                url text
            );

            create table portfolio_fall (
                main_id serial primary key,
                url text
            );

            insert into posts (name, url, comments)
                values ('Andrew','https://www.instagram.com/p/Cdw29p3DMXf/?utm_source=ig_web_copy_link', 'These nails are out of this world!' );
            
            insert into portfolio_main (url)
                values ('class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CcMe7a7LpTn/?utm_source=ig_embed&amp;utm_campaign=loading"');

            insert into portfolio_winter(url)
                values ('class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CYfw9sjrKPt/?utm_source=ig_web_copy_link"');

            insert into portfolio_spring(url)
                values ('class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CbeR0NhuBcQ/?utm_source=ig_web_copy_link"');

            insert into portfolio_summer(url)
                values ('class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CQpBkMXsNWN/?utm_source=ig_web_copy_link"');

            insert into portfolio_fall(url)
                values ('class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CVHdZUysmK0/?utm_source=ig_web_copy_link"');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}