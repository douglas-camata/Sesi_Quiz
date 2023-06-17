var listaPerguntas = JSON.parse(localStorage.getItem('bdQuiz')) || []

var respCorreta = ''
var pontuacao = 0

function carregarPergunta(){
    var iSorteada = parseInt(Math.random() * listaPerguntas.length)
    
    respCorreta = listaPerguntas[iSorteada].correta
    document.getElementById('pergunta').innerHTML = listaPerguntas[iSorteada].pergunta
    document.getElementById('imagem').src = listaPerguntas[iSorteada].imagem
    document.getElementById('resp1').innerHTML = listaPerguntas[iSorteada].resp1
    document.getElementById('resp2').innerHTML = listaPerguntas[iSorteada].resp2
    document.getElementById('resp3').innerHTML = listaPerguntas[iSorteada].resp3
    document.getElementById('resp4').innerHTML = listaPerguntas[iSorteada].resp4
    
}
carregarPergunta()

function respondeu(resposta){
    if (resposta == respCorreta){
        alert('RESPOSTA CORRETA')
        pontuacao += 1
        carregarPergunta()
    } else {
        alert ('Que pena você errou!!!')
        pontuacao -= 1
        carregarPergunta()
    }

    document.getElementById('pontuacao').innerHTML = pontuacao + ' Pontos'


}

