var ClientePF = require('../database/CilentePF')

const create = async (clientePF, page , limit) => {

    const { nomeCompleto, cpf, rg, dataNascimento, sexo, grauEscolaridade } = clientePF;

    ClientePF.create({
        nomeCompleto, cpf, rg, dataNascimento, sexo, grauEscolaridade
    }).then(() => {
        res.redirect("/cliente-tabela")
    }).catch((errMessage) => {
        console.log(errMessage)
    })

}

module.exports = {
    create
}