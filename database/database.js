const Sequelize = require("sequelize");

const connection = new Sequelize('database', 'user', 'password', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = connection;