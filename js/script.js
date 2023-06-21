var listaPerguntas = JSON.parse(localStorage.getItem('bdQuiz')) || bancoPerguntas()

var respCorreta = ''
var pontuacao = 0
var listaSorteadas = []
var rank = JSON.parse(localStorage.getItem('bdQuizRank')) || []

var iniHora = ''

console.log(listaPerguntas)
function carregarPergunta() {

    if (listaPerguntas.length == listaSorteadas.length) {

        fimDeJogo()

        alert('Você já respondeu todas as perguntas...')
        return
    }

    do {
        var iSorteada = parseInt(Math.random() * listaPerguntas.length)
    } while (listaSorteadas.indexOf(iSorteada) != -1)
    listaSorteadas.push(iSorteada)

    respCorreta = listaPerguntas[iSorteada].correta
    document.getElementById('pergunta').innerHTML = listaPerguntas[iSorteada].pergunta
    document.getElementById('imagem').src = listaPerguntas[iSorteada].imagem
    document.getElementById('resp1').innerHTML = listaPerguntas[iSorteada].resp1
    document.getElementById('resp2').innerHTML = listaPerguntas[iSorteada].resp2
    document.getElementById('resp3').innerHTML = listaPerguntas[iSorteada].resp3
    document.getElementById('resp4').innerHTML = listaPerguntas[iSorteada].resp4

    iniHora = Date.now()
}
carregarPergunta()

function fimDeJogo() {
    var objJogador = {
        nome: document.getElementById('jogadorNome').value,
        pontos: pontuacao
    }
    rank.push(objJogador)
    localStorage.setItem('bdQuizRank', JSON.stringify(rank))

    document.getElementById('finalJogo').style.display = 'block'

    document.getElementById('rank').innerHTML = ''
    rank.sort((a, b) => {
        return b.pontos - a.pontos
    })
    rank.forEach((element, i) => {
        document.getElementById('rank').innerHTML += `
                <p class='rank'> <b> ${i +1}º </b>  ${element.nome}  ${element.pontos}pts </p>
            `
    })
}

function respondeu(resposta) {
    var tempo = Date.now() - iniHora
    alert (Date.now() + ' - ' +  iniHora + ' - ' + tempo)

    if (resposta == respCorreta) {
        alert('RESPOSTA CORRETA')
        pontuacao += 1
        carregarPergunta()
    } else {
        alert('Que pena você errou!!!')
        pontuacao -= 1
        carregarPergunta()
    }

    document.getElementById('pontuacao').innerHTML = document.getElementById('jogadorNome').value + ' - ' + pontuacao + ' Pontos'
}

function iniciarJogo() {

    document.getElementById('jogo').style.display = 'block'
    document.getElementById('jogador').style.display = 'none'

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
            }
        ]
    localStorage.setItem('bdQuiz', JSON.stringify(dados))
    return dados
}
