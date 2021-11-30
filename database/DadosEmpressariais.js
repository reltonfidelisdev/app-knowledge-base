const Sequelize = require("sequelize");
const connection = require("./db_sequelize")

const DadosEmpresariais = connection.define('dadosEmpresariais', {
    uid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    nomeEmpresarial: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cnpj:{ 
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true
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

DadosEmpresariais.sync({force: true}); // Padrão = false

module.exports = DadosEmpresariais;