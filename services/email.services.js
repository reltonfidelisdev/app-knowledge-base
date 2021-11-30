
const database = require('../database/db_knex')

const create = async (emailCliente, page, limit) => {

    const { emailPrincipal, emailSecundario, idCliente} = emailCliente;
    const emailsCliente = {
        "emailPrincipal": emailPrincipal,
        "emailSecundario": emailSecundario,
        "idCliente": idCliente
    }
console.log(emailsCliente)
    await database.insert(emailsCliente)
            .into("email").then(data => {
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    create
}