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
}

module.exports = {
    create
}