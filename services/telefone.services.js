const Telefone = require('../database/Telefone');

const create = (telefoneCliente, page, limit) => {

    const {celularPrincipal, fixoProprio, fixoRecado, ownerToken} = telefoneCliente;

     Telefone.create({
        celularPrincipal, fixoProprio, fixoRecado, ownerToken
    }).then(() => {
        console.log('Telefone cadastrado')
    }).catch((errMessage) => {
        console.log(errMessage)
    })
}

module.exports = {
    create
}