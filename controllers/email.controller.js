
const EmailCliente = require("../services/email.services")

const create = (req, res, next) => {
    const {emailPrincipal, emailSecundario, idCliente} = req.body
    
    console.log("Onnwr token no controller Email", idCliente);
    
    console.log(req.body)
    
    const emailCliente = {
        "emailPrincipal": emailPrincipal,
        "emailSecundario": emailSecundario,
        "idCliente": idCliente
    }
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;

    try{
        EmailCliente.create(emailCliente, page, limit);
        res.status(200).json({status: 200, message: "Email salvo com sucesso", dadosEnviados: emailCliente})
    }catch(err) {
        res.status(400).json({status: 400, message: "Email salvo", dadosEnviados: emailCliente})
    }

}

module.exports = {
    create
};