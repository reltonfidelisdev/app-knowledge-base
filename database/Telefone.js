const Sequelize = require("sequelize");
const connection = require("./database");

const Telefone = connection.define('telefone',{
    celularPrincipal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fixoProprio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fixoRecado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ownerToken: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName: true, // impede a pluralização das tabelas pelo sequelize
})

Telefone.sync({force: false})

module.exports = Telefone;