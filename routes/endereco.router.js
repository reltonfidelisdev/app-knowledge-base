const express = require("express");
const router = express.Router();

const enderecoController = require("../controllers/endereco.controller");

router.get('/', (req, res) => {
    res.send("Rota principal");
})

router.get('/id/:id', (req, res) => {
    res.send("Procurar por id");
})

router.get('/uid/:uid', (req, res) => {
    res.send("Procurar por uid")
})

router.get('/name/:name', (req, res) => {
    res.send("Procurar por nome")
})

router.post('/create/', enderecoController.create )
module.exports = router;