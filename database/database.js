const Sequelize = require("sequelize");

const connection = new Sequelize('database', 'db_user', 'password', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = connection;