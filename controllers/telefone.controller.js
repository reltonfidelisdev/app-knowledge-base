const TelefoneService = require('../services/telefone.services');

const create = (req, res, next) => {
    const {celularPrincipal, fixoProprio, fixoRecado, ownerToken } = req.body
    
    const telefoneCliente = {
        "celularPrincipal": celularPrincipal,
        "fixoProprio": fixoProprio,
        "fixoRecado": fixoRecado,
        "ownerToken": ownerToken
    }
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try{
        TelefoneService.create(telefoneCliente, page, limit)
    }catch(errorMessage) {
        message = "Erro ao tentar cadastrar o cliente!"
        res.render("components/feedback/feedback.ejs",({
            message:message
        }))
    }

    message = "Telefone cadastrado com sucesso!"
    res.render("components/feedback/feedback.ejs",({
        message:message
    }))
}

module.exports = {
    create
}