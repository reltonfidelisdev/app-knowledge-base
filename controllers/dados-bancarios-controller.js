const DadosBancariosServices = require("../services/dados-bancarios.services")
const create = (req, res, next) => {
    const {dadosBancariosOwnerToken, codigoBanco, tipoConta, agenciaComDigito, contaComDigito} = req.body
    
    console.log(`ownerToken no controller dados bancarios ${dadosBancariosOwnerToken}`)
    const contaBancaria = {
        "codigoBanco": codigoBanco,
        "tipoConta": tipoConta,
        "agenciaComDigito": agenciaComDigito,
        "contaComDigito": contaComDigito,
        "dadosBancariosOwnerToken": dadosBancariosOwnerToken
    }
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        DadosBancariosServices.create(contaBancaria, page, limit)
        res.status(200).json({staus:200, dadosEnviados:contaBancaria})
    } catch (errorMessage) {
        message = "Erro ao tentar cadastrar o Conta Bancária!"
        res.render("components/feedback/feedback.ejs",({
            message:message
        }))
    }


}

module.exports = {
    create
}