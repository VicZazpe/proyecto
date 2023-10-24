const { Sequelize } = require("sequelize");


    const db = new Sequelize('localtest', 'root', 1234, {
        host: 'localhost',
        dialect: "mysql",

    })
    db.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });



module.exports = db;