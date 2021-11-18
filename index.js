const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta")

connection
    .authenticate()
    .then(() => {
        console.log("Conecdao ao mysql")
    }).catch((msgErro) => {
        console.log(msgErro);
    })

// Estou dizendo para o Express usar o EJS como View engine.
app.set('view engine','ejs');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    Pergunta.findAll({ raw: true, order:[
        ['id', 'DESC']
    ]}).then(perguntas => {
        res.render("index", {perguntas: perguntas});
    });
  });

app.get('/perguntar', (req, res) => {
    res.render("perguntar")
})

app.post('/salvar-pergunta', (req, res) => {
    const { titulo, descricao } = req.body

    Pergunta.create({
        titulo,
        descricao
    }).then(() => {
        res.redirect("/")
    })
    //res.send(`Titulo: ${titulo} | Descrição: ${descricao}`);
});

app.get('/pergunta/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Pergunta.findOne(
        {where: {id:id}}
    ).then(pergunta => {
        if(pergunta != undefined){ // Pergunta encontrada

            Resposta.findAll({

                where: {perguntaId : id},
                order: [
                    ['id', 'DESC']
                ]

            }).then((respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                });
            }))

        }else{ // Não encontrada
            res.redirect("/")
        }
    })
})

app.post('/responder', (req, res) => {
    var { corpo, perguntaId } = req.body;
    Resposta.create({
        corpo,
        perguntaId
    }).then(() => {
        res.redirect(`/pergunta/${perguntaId}`)
    }).catch((msgErro) => {
        console.log(msgErro)
    })

})

app.listen(8080,()=>{console.log("App rodando!");});