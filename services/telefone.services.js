const database = require('../database/db_knex')

const create = (telefoneCliente, page, limit) => {

    const {celularPrincipal, fixoProprio, fixoRecado, ownerToken} = telefoneCliente;
    
    database.insert(telefoneCliente).into('telefone').then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    create
}