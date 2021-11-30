
const Telefone = require("../database/Telefone")
const create = async (telefoneCliente, page, limit) => {
  const { 
    celularPrincipal, 
    fixoProprio, 
    fixoRecado, 
    idCliente } = telefoneCliente;
  
    console.log(telefoneCliente);

  await Telefone.create({
    celularPrincipal, 
    fixoProprio, 
    fixoRecado, 
    idCliente
  }).then(() => {
    console.log("Ok")
  }).catch((msgErro) => {
    console.log(msgErro)
  })
};

module.exports = {
  create,
};
