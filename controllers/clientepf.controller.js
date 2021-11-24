const ClientePF = require('../database/CilentePF');
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
        message = "Cliente cadastrado com sucesso!"
        res.render("components/feedback/feedback.ejs",({
            message:message
        }))
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
        // message = "Erro ao tentar cadastrar o cliente!"
        // res.render("components/feedback/feedback.ejs",({
        //     message:message,
        // }))
    }
} // End Create New ClientePF

const readByUID = (req, res, next) => {
    const uid = req.params;
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        const data = ClientPFService.readByUID(uid, page, limit)
        
        res.status(200).json(data)
        message = "Cliente cadastrado com sucesso!"
        
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });

    }
}

module.exports = {
    create,
    readByUID
}