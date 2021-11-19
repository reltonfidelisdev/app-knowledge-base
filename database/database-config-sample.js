// Rename tis file to database.js and configure with your database, user, password 
// And host if necessary
const Sequelize = require("sequelize");

const connection = new Sequelize('db_name', 'db_user', 'db_password', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = connection;