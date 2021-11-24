const express = require("express");
const router = express.Router();

const EmailController = require("../controllers/email.controller");

router.get('/', (req, res) => {
    res.send("Rota principal Email");
})

router.get('/id/:id', (req, res) => {
    res.send("Procurar por id");
})

router.get('/uid/:uid', (req, res) => {
    res.send("Procurar por uid")
})

router.post('/create/', EmailController.create )
module.exports = router;