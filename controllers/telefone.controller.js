const TelefoneService = require('../services/telefone.services');

const create = async (req, res, next) => {
    const {numero, contactType, ownerToken } = req.body
    
    ownerToken.toString()
    console.log(typeof ownerToken)
    console.log(numero, contactType, ownerToken)

    const telefoneCliente = {
        "numero": numero,
        "contactType": contactType,
        "ownerToken": ownerToken
    }
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try{
        await TelefoneService.create(telefoneCliente, page, limit)
        message = "Telefone cadastrado com sucesso!"
        res.render("components/feedback/feedback.ejs",({
            message:message
        }))
    }catch(errorMessage) {
        message = "Erro ao tentar cadastrar o cliente!"
        res.render("components/feedback/feedback.ejs",({
            message:message
        }))
    }
}

module.exports = {
    create
}