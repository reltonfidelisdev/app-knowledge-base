const express = require("express");
const router = express.Router();
const { body } = require('express-validator');
const Cliente = require("../database/Cliente")

const listaEstadosBrasileiros = require('../database/estados-brasileiros')

var ClienteController = require('../controllers/cliente.controller');
const Telefone = require("../database/Telefone");

// Pesquisa todos os clientes
router.get('/all/', async (req, res)  =>  {

    const cliente = Cliente.findAll({ order:[
        ['id', 'DESC']
    ]}).then(Cliente => {
        res.render('components/cliente-tabela/cliente-tabela.ejs',{cliente: Cliente})
    });
  
    //console.log(Cliente)
});


// Encontra cliente pelo CPF
router.post('/cpf/', async (req, res) => {
    const cpf = req.body.cpf;

    await Cliente.findOne(
        {where: { cpf : cpf }},
    ).then(Cliente => {
        if(Cliente != undefined){ // Pergunta encontrada
            
            //console.log(Cliente)
            res.render("components/cliente/cliente-info.ejs", {
                arrayCliente: Cliente,
                arrlistaEstadosBrasileiros: listaEstadosBrasileiros
            })

        }else{ // Não encontrada
            res.redirect("/client/create")
        }
    })
})


router.get('/id/:id', (req, res) => {
    const { id } = req.params
    res.send(`Procurar por id: ${id}` );
})

router.get('/uid/:uid', ClienteController.readByUID)


// Post new user
// /client/new
router.post('/create',
body('cpf').not().isEmpty().trim().escape(),
body('rg').not().isEmpty().trim().escape(),
body('nomeCompleto').not().isEmpty().trim().escape(),
body('dataNascimento').not().isEmpty().isDate().trim().escape(),
body('sexo').not().isEmpty().isString().trim().escape(),
ClienteController.create)

// Rota client/pf
// Exibe o formulário de pesquisa
router.get('/pf/', (req, res) => {
    
    res.render('components/pesquisa-pf/form-pesquisa-pf.ejs')
})

// Rota client/create
router.get('/create', (req, res) => {

    res.render('components/cliente/form-cliente.ejs')
})

module.exports = router;