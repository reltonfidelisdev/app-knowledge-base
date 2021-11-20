const ClientPFService = require('../services/clientepf.services')

const create = async (req, res, next) => {
    const { nomeCompleto, cpf, rg, dataNascimento, sexo, grauEscolaridade } = req.body
    
    const clientePF = {
        "nomeCompleto": nomeCompleto,
        "cpf": cpf, 
        "rg": rg, 
        "dataNascimento": dataNascimento, 
        "sexo":sexo,
        "grauEscolaridade":grauEscolaridade}

    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;

    try {
        await ClientPFService.create(clientePF, page, limit)
        res.redirect('/cliente-tabela')

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = {
    create
}