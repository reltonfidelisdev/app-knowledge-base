const Sequelize = require("sequelize");
const connection = require("./db_sequelize");
const Cliente = require("./Cliente")
const Endereco = connection.define('endereco',
{
    idCliente: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false,
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pontoReferencia: {
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
});

Endereco.belongsTo(Cliente, {
    constraint: true,
    foreignKey: 'idCliente'
})

Endereco.sync({force: true})

module.exports = Endereco;