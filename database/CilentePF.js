const Sequelize = require("sequelize");
const connection = require("./database")

const ClientePF = connection.define('clientepf', {
    uid: {
        primaryKey: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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
        type: Sequelize.DATE,
        allowNull: false
    },
    sexo: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    grauEscolaridade:{ 
        type: Sequelize.CHAR,
        allowNull: false
    }
},{
    freezeTableName: true, // impede a pluralização das tabelas pelo sequelize
});

ClientePF.sync({force: false});

module.exports = ClientePF;