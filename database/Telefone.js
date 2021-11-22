const Sequelize = require("sequelize");
const connection = require("./db_sequelize");

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
    },
    createdAt:{
        type: Sequelize.DATE,
        defaultValue: new Date()
    },
    updatedAt:{
        type: Sequelize.DATE,
        defaultValue: new Date()
    }
},{
    freezeTableName: true, // impede a pluralização das tabelas pelo sequelize
})

Telefone.sync({force: true})

module.exports = Telefone;