var listaPerguntas = JSON.parse(localStorage.getItem('bdQuiz')) || []

var respCorreta = ''
var pontuacao = 0

function carregarPergunta(){
    var iSorteada = parseInt(Math.random() * listaPerguntas.length)
       
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