const Telefone = require('../database/Telefone');

const create = async (telefoneCliente, page, limit) => {

    const {numero, contactType, ownerToken} = telefoneCliente;

    await Telefone.create({
        numero, contactType, ownerToken
    }).then(() => {
        console.log('Telefone cadastrado')
    }).catch((errMessage) => {
        console.log(errMessage)
    })
}

module.exports = {
    create
}