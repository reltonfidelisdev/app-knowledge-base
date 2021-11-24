const express = require("express");
const app = express();
// App routes
const RouterClientPF = require("./routes/clientepf.router")
const RouterProposta = require("./routes/proposta.router")
const RouterTelefone = require("./routes/telefone.router")
const RouterDadosBancarios = require("./routes/dados-dancarios.router")
// App routes
const bodyParser = require("body-parser");
const connection = require("./database/db_sequelize");
// App DAO Sequelize ORM Class
const Pergunta       = require("./database/Pergunta");
const Resposta       = require("./database/Resposta");
const ClientePF      = require("./database/CilentePF")
const Telefone       = require("./database/Telefone");
const DadosBancarios = require("./database/DadosBancarios");



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


// Rotas Banco
app.get('/banco', (req, res) => {
    res.render('components/banco/form-banco.ejs')
})




// Rotas Cliente PJ
app.get('/cadastrar-cliente-pj', (req, res) => {

    res.render('components/clientepj/form-clientepj.ejs')
})

// Rotas Contato
app.get('/contato', (req, res) => {
    res.render('components/contato/form-contato.ejs')
})

// Rotas Dados Bancarios PF & PJ
app.get('/dados-bancarios-pf-pj', (req, res) => {
    res.render('components/dados-bancarios-pf-pj/form-dados-bancarios-pf-pj.ejs')
})


// Rotas Documentos
app.get('/documento-digital', (req, res) => {
    res.render('components/documento-digital/form-documento-digital.ejs')
})


// Rotas Proposta


// Rotas Endereço
app.get('/endereco', (req, res) => {
    res.render('components/endereco/form-endereco.ejs')
})

// Rotas Home
app.get('/home', (req, res) => {
    res.render('components/home/home.ejs')
})

// Rotas Operador
app.get('/operador', (req, res) => {
    res.render('components/operador/form-operador.ejs')
})

// Rotas Produto
app.get('/produto', (req, res) => {
    res.render('components/produto/form-produto.ejs')
})

// Rotas Proposta
app.get('/proposta', (req, res) => {
    res.render('components/proposta/tabela-proposta.ejs')
})



// Encontra cliente pelo UID
app.get('/cliente/:uid', async (req, res) => {
    const uid = req.params.uid;

    await ClientePF.findOne(
        {where: { uid : uid }}
    ).then(clientepf => {
        if(clientepf != undefined){ // Pergunta encontrada

            //console.log(clientepf)
            res.render("components/clientepf/cliente-info.ejs", {
                arrayCliente: clientepf
            })

        }else{ // Não encontrada
            res.redirect("/")
        }
    })
})
// Erro 404
app.get('/erro404', (req, res) => {
    res.render('components/erro404/erro404.ejs')
})

app.get('/feedback/message/:msg', (req, res) => {
    const {message} = req.body
    res.render(message)
})




// Routes
app.use('/telefone/', RouterTelefone)
app.use('/client/', RouterClientPF)
app.use('/proposta/', RouterProposta)
app.use('/dados-bancarios/', RouterDadosBancarios)


app.listen(8080,()=>{console.log("App rodando!");});