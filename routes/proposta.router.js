const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Rota principal");
})

router.get('/id/:id', (req, res) => {
    res.send("Procurar por id");
})

router.get('/uid/:uid', (req, res) => {
    res.send("Procurar por uid")
})

router.get('/emprestimo-cartao-credito', (req, res) => {
    res.render('components/emprestimo-cartao-credito/form-emprestimo-cartao-credito.ejs')
})
router.get('/simular', (req, res) => {
    res.render('components/emprestimo-cartao-credito/form-simulador.ejs')
})
router.post('/simular/calculo', (req, res) => {
    console.log(req.body)
    var {valorDoEmprestimo, tabelaDeCalculo} = req.body
    const tcalculo = tabelaDeCalculo;
    let valorSolicitado = parseFloat(valorDoEmprestimo);
    let taxaDeCalculo = parseFloat(tcalculo) / 100;
    let baseDivisor = Number;
    let baseDivisorUm = (Math.pow((1 + taxaDeCalculo), 12) -1);
    let baseDivisorDois = Math.pow((1 + taxaDeCalculo), 12) * taxaDeCalculo;
    
    baseDivisor = baseDivisorUm / baseDivisorDois;
    let vlrParcelaMensal = (valorSolicitado / baseDivisor);
    let valorParcelaMensal = parseFloat(vlrParcelaMensal).toFixed(2)
    let lmtNecessario = (vlrParcelaMensal * 12)
    limiteNecessario = parseFloat(lmtNecessario).toFixed(2)
    valorLiberado = valorDoEmprestimo
    
    valorLiberado.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })

    res.render('components/emprestimo-cartao-credito/form-simulador.ejs',{
        limiteNecessario: limiteNecessario,
        valorParcelaMensal: valorParcelaMensal,
        valorLiberado: valorLiberado
    })
    //res.send(`
    // Valor liberado: ${valorLiberado} <br >
    // Limite necessário: ${limiteNecessario} <br >
    // Valor da parcela mensal: ${valorParcelaMensal}
    // `)
})


module.exports = router;