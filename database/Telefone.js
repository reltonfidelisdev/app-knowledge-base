const Sequelize = require("sequelize");
const connection = require("./db_sequelize");
const Cliente = require("./Cliente")
const DadosEmpressariais = require("./DadosEmpressariais")
const Telefone = connection.define("telefone",
  {
    idCliente: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false,
    },
    celularPrincipal: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fixoProprio: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fixoRecado: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  },
  {
    freezeTableName: true, // impede a pluralização das tabelas pelo sequelize
  }
);

Telefone.belongsTo(Cliente, { // Pertence a Cliente
  constraint: true,
  foreignKey: 'idCliente'
})

Telefone.sync({ force: true });

module.exports = Telefone;
