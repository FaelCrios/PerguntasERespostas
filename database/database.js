const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','22052002@@',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;    