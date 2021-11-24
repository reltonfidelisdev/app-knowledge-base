const database = require("../database/db_knex")
const crypto = require("crypto");

const moment = require("moment");


const create = async (clientePF, page , limit) => {

    // string to be hashed
    const str = "I need to be hashed using MD5😃!";

    // secret or salt to be hashed with
    const secret = "_" + new Date;

    // create a md5 hasher
    const md5Hasher = crypto.createHmac("md5", secret);

    // hash the string
    // and set the output format
    const hash = md5Hasher.update(str).digest("hex");

    // A unique md5 hash 😃
    console.log(hash); // ex: 1c211d131453e023d101c40f2c3372e0

    var { nomeCompleto, cpf, rg, dataNascimento, sexo, grauEscolaridade } = clientePF;
    const formData = dataNascimento;
    dataSplitted = formData.split('&#x2F;')
    var dataFromatada = `${dataSplitted[2]}-${dataSplitted[1]}-${dataSplitted[0]}`;
    var dataFormatoMysql = moment(dataFromatada).format("YYYY-MM-DD HH:mm:ss");
    console.log(dataFormatoMysql)
    dados = {
    "uid": hash,
    "nomeCompleto": nomeCompleto,
    "cpf": cpf, 
    "rg":rg, 
    "dataNascimento":dataFormatoMysql, 
    "sexo":sexo,
    "grauEscolaridade": grauEscolaridade
    }

    await database.insert(dados).into('clientepf').then(data => {
        console.log("cliente Cadastrado", data)
    }).catch(err => {
        console.log(err)
    })
} // End of Create new client

const readByUID = async (clientUID, page, limit) => {
    const {uid} = clientUID
    console.log("Uiid services:", uid)
    await database.select('*').from('clientepf').where({'uid': uid}).then((data) => {
       console.log("data pf services", data)
        return data;
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    create,
    readByUID
}