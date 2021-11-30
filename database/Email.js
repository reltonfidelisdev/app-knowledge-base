const Sequelize = require("sequelize");
const connection = require("../database/db_sequelize");
const Cliente = require("./Cliente");

const Email = connection.define('email',{
    idCliente: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
    emailPrincipal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailSecundario: {
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

Email.belongsTo(Cliente, {
    constraint: true,
    foreignKey: 'idCliente'
})

Email.sync({ force: true})

module.exports = Email;