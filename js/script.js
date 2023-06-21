var listaPerguntas =  bancoPerguntas()

var respCorreta = ''
var pontuacao = 0
var listaSorteadas = []
var rank = JSON.parse(localStorage.getItem('bdQuizRank')) || []

var iniHora = ''
var perguntaAtual = ''

console.log(teste);

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