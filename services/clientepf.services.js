const ClientePF = require('../database/CilentePF')


const create = async (clientePF, page , limit) => {

    const { nomeCompleto, cpf, rg, dataNascimento, sexo, grauEscolaridade } = clientePF;

    await ClientePF.create({
        nomeCompleto, cpf, rg, dataNascimento, sexo, grauEscolaridade
    }).then(() => {
        console.log('Cliente cadastrado')
    }).catch((errMessage) => {
        console.log(errMessage)
    })
} // End of Create new client

const read = async (clientUID, page, limit) => {
    await ClientePF.findOne({

    })
}

module.exports = {
    create,
    read
}