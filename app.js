/*let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do Número Secreto'

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'*/

let listaDeNumerosSorteados = []
let numeroLimite = 10
let numerosecreto = gerarNumeroAleatorio()
let tentativa = 1

function exibirTextoNaTela (tag,texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}
function mensagemInicial (){
    exibirTextoNaTela ('h1','Jogo do Número Secreto')
    exibirTextoNaTela ('p',`Escreva um número entre 1 a ${numeroLimite}`)
}
mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value
    console.log(chute==numerosecreto)

    if(chute==numerosecreto){
        exibirTextoNaTela('h1','Acertou')
        let palavraTentativa = tentativa>1? 'tentativas': 'tentativa'
        let textoTentativa =  `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`
        exibirTextoNaTela('p', textoTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if(chute>numerosecreto){
            exibirTextoNaTela('p',' O número secreto é menor')
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativa++
        limparTexto()
    }
}

function gerarNumeroAleatorio() {
    
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeNumerosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparTexto() {
    chute = document.querySelector('input')
    chute.value = ''
    
}

function reiniciarJogo (){
    numerosecreto=gerarNumeroAleatorio()
    limparTexto()
    tentativa = 1
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}