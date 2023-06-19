var listaPerguntas = JSON.parse(localStorage.getItem('bdQuiz')) || []
var respCorreta = ''
var pontuacao = 0
var listaSorteadas = []

bancoPerguntas()

function sortearPergunta() {
    do {
        var iSorteada = parseInt(Math.random() * listaPerguntas.length)
        var posVetor = listaSorteadas.indexOf(iSorteada)
    } while (posVetor != -1)

    listaSorteadas.push(iSorteada)
    return iSorteada
}

function carregarPergunta() {

    if (listaPerguntas.length == listaSorteadas.length) {
        alert('Voce ja respondeu todas as perguntas...')
        return
    }

    var iSorteada = sortearPergunta()

    respCorreta = listaPerguntas[iSorteada].correta
    document.getElementById('pergunta').innerHTML = listaPerguntas[iSorteada].pergunta
    document.getElementById('imagem').src = listaPerguntas[iSorteada].imagem
    document.getElementById('resp1').innerHTML = listaPerguntas[iSorteada].resp1
    document.getElementById('resp2').innerHTML = listaPerguntas[iSorteada].resp2
    document.getElementById('resp3').innerHTML = listaPerguntas[iSorteada].resp3
    document.getElementById('resp4').innerHTML = listaPerguntas[iSorteada].resp4

}
carregarPergunta()

function respondeu(resposta) {
    if (resposta == respCorreta) {
        alert('RESPOSTA CORRETA')
        pontuacao += 1
        carregarPergunta()
    } else {
        alert('Que pena você errou!!!')
        pontuacao -= 1
        carregarPergunta()
    }

    document.getElementById('pontuacao').innerHTML = pontuacao + ' Pontos'
}


function bancoPerguntas() {
    if (listaPerguntas.length == 0) {
        listaPerguntas =
            [
                {
                    "tema": "Conhecimentos Gerais",
                    "pergunta": "Que time é esse?",
                    "imagem": "https://www.dicascartola.com.br/wp-content/uploads/2019/02/cartola-fc-athletico-paranaense.jpg",
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
                }
            ]
    }
}
