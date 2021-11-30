const Sequelize = require("sequelize");
const connection = require("./db_sequelize");

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: { // Relacionamento cru entre duas tabelas
        type: Sequelize.INTEGER,
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
});

// Resposta.sync({force: false})

module.exports = Resposta;