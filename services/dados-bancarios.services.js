const database = require("../database/db_knex")

const create = (dadosBancarios, page, limit) => {
    const {codigoBanco, agenciaComDigito, contaComDigito, idCliente} = dadosBancarios;

    const dBancarios = {
        "codigoBanco": codigoBanco, 
        "agenciaComDigito": agenciaComDigito, 
        "contaComDigito": contaComDigito,
         "idCliente": idCliente
        }

    database.insert(dBancarios)
            .into("dadosBancarios").then(data => {
                console.log(data)
            }).catch(err =>{
                console.log(err)
            })
}

module.exports = {create}