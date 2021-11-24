const Sequelize = require("sequelize");
const connection = require("../database/db_sequelize")

const Email = connection.define('email',{
    emailPrincipal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailSecundario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailOwnerToken: {
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

Email.sync({ force: false})

module.exports = Email;