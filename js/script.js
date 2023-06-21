var listaPerguntas = JSON.parse(localStorage.getItem('bdQuiz')) || bancoPerguntas()

var respCorreta = ''
var pontuacao = 0
var listaSorteadas = []
var rank = JSON.parse(localStorage.getItem('bdQuizRank')) || []

var iniHora = ''
var perguntaAtual = ''

function carregarPergunta() {

    if (listaPerguntas.length == listaSorteadas.length) {

        fimDeJogo()

        //alert('Você já respondeu todas as perguntas...')
        return
    }

    do {
        var iSorteada = parseInt(Math.random() * listaPerguntas.length)
    } while (listaSorteadas.indexOf(iSorteada) != -1)
    listaSorteadas.push(iSorteada)

    respCorreta = listaPerguntas[iSorteada].correta
    perguntaAtual = listaPerguntas[iSorteada].pergunta
    document.getElementById('pergunta').innerHTML = listaPerguntas[iSorteada].pergunta
    document.getElementById('imagem').src = listaPerguntas[iSorteada].imagem
    document.getElementById('resp1').innerHTML = listaPerguntas[iSorteada].resp1
    document.getElementById('resp2').innerHTML = listaPerguntas[iSorteada].resp2
    document.getElementById('resp3').innerHTML = listaPerguntas[iSorteada].resp3
    document.getElementById('resp4').innerHTML = listaPerguntas[iSorteada].resp4

    iniHora = Date.now()

    var intervalID = setInterval(() => {
        var pontosResposta = parseInt(200 - (Date.now() - iniHora) / 150)
        if (pontosResposta < 100)
            pontosResposta = 100
        document.getElementById('pergunta').innerHTML = perguntaAtual + ' (' + pontosResposta + ' pontos)'
    }, 50)
    setTimeout(function () {
        clearInterval(intervalID);
    }, 15000);
}

function fimDeJogo() {
    var objJogador = {
        nome: document.getElementById('jogadorNome').value,
        pontos: pontuacao
    }
    rank.push(objJogador)
    localStorage.setItem('bdQuizRank', JSON.stringify(rank))

    document.getElementById('finalJogo').style.display = 'block'

    document.getElementById('rank').innerHTML = '<tr> <th>Pos.</th> <th>Jogador</th> <th>Pontos</th></tr>'
    rank.sort((a, b) => {
        return b.pontos - a.pontos
    })
    rank.forEach((element, i) => {
        if (i < 10)
            document.getElementById('rank').innerHTML += `
                    <tr>
                        <td> <b> ${i + 1}º </b> </td>
                        <td> ${element.nome} </td>
                        <td> ${element.pontos} </td>
                    </tr>
                `
    })
}

function respondeu(resposta) {
    var pontosResposta = parseInt(200 - (Date.now() - iniHora) / 150)
    if (pontosResposta < 100)
        pontosResposta = 100
    //alert(pontosResposta)

    if (resposta == respCorreta) {
        alert('RESPOSTA CORRETA VOCÊ GANHOU ' + pontosResposta)
        pontuacao += pontosResposta
        carregarPergunta()
    } else {
        alert('Que pena você errou!!!')
        carregarPergunta()
    }

    document.getElementById('pontuacao').innerHTML = document.getElementById('jogadorNome').value + ' - ' + pontuacao + ' Pontos'
}

function iniciarJogo() {

    document.getElementById('jogo').style.display = 'block'
    document.getElementById('jogador').style.display = 'none'

    carregarPergunta()

}

function NovoJogo() {
    location.reload()
}

function bancoPerguntas() {

    dados =
        [
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "Que time é esse?",
                "imagem": "https://logodetimes.com/times/atletico-paranaense/logo-atletico-paranaense-4096.png",
                "resp1": "Flamengo",
                "resp2": "Athetico-PR",
                "resp3": "Vitória",
                "resp4": "Chapecoense",
                "correta": "2"
            },
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "Qual é a capital dos EUA?",
                "imagem": "https://media.moneytimes.com.br/uploads/2022/04/estados-unidos-bandeira.jpg",
                "resp1": "Nova York",
                "resp2": "Los Angeles",
                "resp3": "Las Vegas",
                "resp4": "Washington",
                "correta": "4"
            },
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "A Torre Eiffel está localizada em qual país?",
                "imagem": "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/03/vista-da-torre-eiffel-simbolo-da-cidade-de-paris-na-franca-e-um-dos-principais-monumentos-do-mundo.jpg",
                "resp1": "China",
                "resp2": "Estados Unidos",
                "resp3": "França",
                "resp4": "Paris",
                "correta": "3"
            },
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "Quanto é 3³?",
                "imagem": "https://img.freepik.com/vetores-premium/fundo-de-elementos-de-matematica-dos-desenhos-animados_23-2148167806.jpg?w=2000",
                "resp1": "6",
                "resp2": "9",
                "resp3": "27",
                "resp4": "81",
                "correta": "3"
            },
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "Quem foi a primeira pessoa a viajar no Espaço?",
                "imagem": "https://conteudo.imguol.com.br/c/noticias/44/2021/07/09/planeta-terra-visto-do-espaco-1625856127096_v2_450x600.jpg",
                "resp1": "A cadela Laika",
                "resp2": "Neil Armstrong",
                "resp3": "Yuri Gagarin",
                "resp4": "Marcos Pontes",
                "correta": "3"
            },
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "Qual a montanha mais alta do mundo?",
                "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/800px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg",
                "resp1": "Pico da Neblina",
                "resp2": "Mauna Kea",
                "resp3": "Monte Chimborazo",
                "resp4": "Monte Everest",
                "correta": "4"
            },
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "Onde se localiza Machu Picchu?",
                "imagem": "https://www.passagenspromo.com.br/blog/wp-content/uploads/2019/09/viagem-para-machu-picchu-dicas-740x415.jpg",
                "resp1": "Colômbia",
                "resp2": "Peru",
                "resp3": "China",
                "resp4": "Bolívia",
                "correta": "2"
            },
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "Que país tem o formato de uma bota?",
                "imagem": "https://media.istockphoto.com/id/470863140/pt/vetorial/it%C3%A1lia-mapa-do-pa%C3%ADs.jpg?s=170667a&w=0&k=20&c=CO8l2Sm8xB2156zDwoWW6lrKzjDYv_NpX0tZs2SI4us=",
                "resp1": "Itália",
                "resp2": "Butão",
                "resp3": "Portugal",
                "resp4": "Noruega",
                "correta": "1"
            },
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "O que é mais pesado: 1 quilo de algodão ou 1 quilo de ferro?",
                "imagem": "https://assets.mundovestibular-homolog.quero.space/wp-content/uploadedfiles/interspire/balanca.jpg",
                "resp1": "1 quilo de ferro",
                "resp2": "1 quilo de algoão",
                "resp3": "Impossível definir",
                "resp4": "Ambos tem o mesmo peso",
                "correta": "4"
            },
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "Quanto tempo a Terra demora para dar uma volta completa em torno dela mesma?",
                "imagem": "https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg?auto_optimize=low",
                "resp1": "Aproximadamente 24 horas",
                "resp2": "365 dias",
                "resp3": "7 dias",
                "resp4": "30 ou 31 dias",
                "correta": "1"
            },
            {
                "tema": "Conhecimentos Gerais",
                "pergunta": "A que temperatura a água ferve?",
                "imagem": "https://www.infoescola.com/wp-content/uploads/2009/10/ebulicao.jpg",
                "resp1": "200 ºC",
                "resp2": "-10 ºC",
                "resp3": "0 ºC",
                "resp4": "100 ºC",
                "correta": "4"
            }
        ]
    localStorage.setItem('bdQuiz', JSON.stringify(dados))
    return dados
}
