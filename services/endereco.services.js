
const database = require('../database/db_knex')

const create = async (enderecoCliente, page, limit) => {

    const {
        estado,
        cidade,
        logradouro,
        complemento,
        numero,
        cep,
        pontoReferencia,
        idCliente
    } = enderecoCliente;

console.log(enderecoCliente)
    await database.insert(enderecoCliente)
            .into('endereco').then(data => {
                
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    create
}