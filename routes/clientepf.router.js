const express = require("express");
const router = express.Router();
const { body } = require('express-validator');
const ClientePF = require("../database/CilentePF")

const listaEstadosBrasileiros = require('../database/estados-brasileiros')

var ClientePFController = require('../controllers/clientepf.controller')

// Pesquisa todos os clientes
router.get('/all/', async (req, res)  =>  {

    const clientepf = ClientePF.findAll({ raw: true, organise:[
        ['id', 'ASC']
    ]}).then(clientepf => {
        res.render('components/cliente-tabela/cliente-tabela.ejs',{cliente: clientepf})
    });
  
    //console.log(clientepf)
});


// Encontra cliente pelo CPF
router.post('/cpf/', async (req, res) => {
    console.log(listaEstadosBrasileiros)
    const cpf = req.body.cpf;

    await ClientePF.findOne(
        {where: { cpf : cpf }}
    ).then(clientepf => {
        if(clientepf != undefined){ // Pergunta encontrada
            
            //console.log(clientepf)
            res.render("components/clientepf/cliente-info.ejs", {
                arrayCliente: clientepf,
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

router.get('/uid/:uid', (req, res) => {
    const { uid } = req.params
    res.send(`Procurar por id: ${uid}` );
})


// Post new user
// /client/new
router.post('/create',
body('cpf').not().isEmpty().trim().escape(),
body('rg').not().isEmpty().trim().escape(),
body('nomeCompleto').not().isEmpty().trim().escape(),
body('dataNascimento').not().isEmpty().isDate().trim().escape(),
body('sexo').not().isEmpty().isString().trim().escape(),
ClientePFController.create)

// Rota client/pf
// Exibe o formulário de pesquisa
router.get('/pf/', (req, res) => {
    
    res.render('components/pesquisa-pf/form-pesquisa-pf.ejs')
})

// Rota client/create
router.get('/create', (req, res) => {

    res.render('components/clientepf/form-clientepf.ejs')
})

module.exports = router;