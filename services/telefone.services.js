
const database = require('../database/db_knex')

const create = async (telefoneCliente, page, limit) => {

    const {celularPrincipal, fixoProprio, fixoRecado, telefoneOwnerToken} = telefoneCliente;
console.log(telefoneCliente)
    await database.insert(telefoneCliente)
            .into('telefone').then(data => {
                
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    create
}