const TelefoneService = require('../services/telefone.services');

const create = (req, res, next) => {
    const {celularPrincipal, fixoProprio, fixoRecado, ownerToken } = req.body
    console.log("Token no telefone controller",ownerToken)
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
        res.status(200).json({status: 200, message: "Deu certo!"})
        //console.log(data)
    }catch(err) {
        res.status(400).json({status: 400, message: "Deu erro!", erro: err})
    }

}

module.exports = {
    create
}