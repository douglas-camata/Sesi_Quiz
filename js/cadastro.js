var listaPerguntas = JSON.parse(localStorage.getItem('bdQuiz'))
console.log(listaPerguntas)

function cadastrarPergunta(){
    var tema = document.getElementById('tema').value
    var pergunta = document.getElementById('pergunta').value
    var imagem = document.getElementById('imagem').value
    var resp1 = document.getElementById('resp1').value
    var resp2 = document.getElementById('resp2').value
    var resp3 = document.getElementById('resp3').value
    var resp4 = document.getElementById('resp4').value
    var correta = document.getElementById('correta').value

    if (validarCampos(pergunta, resp1, resp2)){
        return
    }

    var objPergunta = {
        tema: tema, 
        pergunta: pergunta, 
        imagem: imagem, 
        resp1: resp1,
        resp2: resp2,
        resp3: resp3,
        resp4: resp4,
        correta: correta
    }
    listaPerguntas.push(objPergunta)
    localStorage.setItem('bdQuiz', JSON.stringify(listaPerguntas))

    document.getElementById('pergunta').value = ''
    document.getElementById('imagem').value = ''
    document.getElementById('resp1').value = ''
    document.getElementById('resp2').value = ''
    document.getElementById('resp3').value = ''
    document.getElementById('resp4').value = ''
    document.getElementById('pergunta').focus()

    exibirPerguntas()

}

function validarCampos(pergunta, resp1, resp2){
    if (pergunta == '' || resp1 == '' || resp2 == '') {
        alert ('Os campos pergunta, resposta1 e resposta2 são obrigatórios ')
        return false
    }
}

function exibirIMG(){
    document.getElementById('foto').src = document.getElementById('imagem').value
}

function exibirPerguntas(){
    document.getElementById('listaPerguntas').innerHTML = ''
    listaPerguntas.forEach((item, i) => {
        document.getElementById('listaPerguntas').innerHTML += 
            `<div>
                <b>Pergunta</b>: ${item.pergunta} 
                <b>Resp 1</b>: ${item.resp1} 
                <b>Resp 2</b>: ${item.resp2} 
                <b>Resp 3</b>: ${item.resp3} 
                <b>Resp 4</b>: ${item.resp4} 
                <b>Correta</b>: ${item.correta} 
            </p>`
    })
}
exibirPerguntas()
