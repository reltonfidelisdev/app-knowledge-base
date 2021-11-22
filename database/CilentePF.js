const Sequelize = require("sequelize");
const connection = require("./db_sequelize")

const ClientePF = connection.define('clientepf', {
    uid: {
        primaryKey: false,
        type: Sequelize.STRING,
        defaultValue: new Date(),
        allowNull: false
      },
    nomeCompleto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf:{ 
        type: Sequelize.STRING,
        allowNull: false
    },
    rg: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    grauEscolaridade:{ 
        type: Sequelize.CHAR,
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
});

// ClientePF.sync({force: false}); // Padrão = false

module.exports = ClientePF;