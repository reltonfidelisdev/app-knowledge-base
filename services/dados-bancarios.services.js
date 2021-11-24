const database = require("../database/db_knex")

const create = (dadosBancarios, page, limit) => {
    const {codigoBanco, agenciaComDigito, contaComDigito, ownerToken} = dadosBancarios;

    const dBancarios = {
        "codigoBanco": codigoBanco, 
        "agenciaComDigito": agenciaComDigito, 
        "contaComDigito": contaComDigito,
         "ownerToken": ownerToken
        }

    database.insert(dBancarios)
            .into("dadosBancarios").then(data => {
                console.log(data)
            }).catch(err =>{
                console.log(err)
            })
}

module.exports = {create}