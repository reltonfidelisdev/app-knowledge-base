const EnderecoSevice = require("../services/endereco.services")

const create = (req, res, next) => {
    const {
        estado,
        cidade,
        logradouro,
        complemento,
        numero,
        cep,
        pontoReferencia,
        idCliente
    } = req.body;

    console.log("Token no endereco controller",idCliente)
    const enderecoCliente = {
        "estado": estado,
        "cidade": cidade,
        "logradouro": logradouro,
        "complemento": complemento,
        "numero": numero,
        "cep": cep,
        "pontoReferencia": pontoReferencia,
        "idCliente": idCliente
    }
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try{
        EnderecoSevice.create(enderecoCliente, page, limit)
        res.status(200).json({status: 200, message: "Deu certo!", dadosEnviados: enderecoCliente})
        //console.log(data)
    }catch(err) {
        res.status(400).json({status: 400, message: "Deu erro!", erro: err})
    }

}

module.exports = {
    create
}