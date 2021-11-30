const Sequelize = require("sequelize");
const connection = require("./db_sequelize")

const Cliente = connection.define('cliente', {
    uid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    nomeCompleto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf:{ 
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true
    },
    rg: {
        type: Sequelize.STRING(25),
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    sexo: {
        type: Sequelize.CHAR(1),
        allowNull: false
    },
    grauEscolaridade:{ 
        type: Sequelize.STRING(50),
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
},
{
    freezeTableName: true, // impede a pluralização das tabelas pelo sequelize
});

// Cliente.sync({force: true}); // Padrão = false

module.exports = Cliente;