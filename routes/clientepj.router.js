const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Rota principal");
})

router.get('/id/:id', (req, res) => {
    res.send("Procurar por id");
})

router.ger('/uid/:uid', (req, res) => {
    res.send("Procurar por uid")
})

router.get('/name/:name', (req, res) => {
    res.send("Procurar por nome")
})

module.exports = router;