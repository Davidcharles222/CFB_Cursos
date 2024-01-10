//Função é um bloco de comando que eu posso executar em um momento oportuno

function nome(){//->Declaração da função
    console.log('CFB Cursos')
}
nome()//->Chamada da função
nome()//->Posso chamar quantas vezes necessário
nome()//->Posso chamar quantas vezes necessário

//---------------------------------------

function soma2_10(){
    let n1 = 2
    let n2 = 10
    let soma = n1 + n2
    console.log(soma)
}
for(let i = 0; i < 10; i++){
    soma2_10()//chamei a function dentro do loop criado
}

//---------------------------------------

function mudarTexto(){//chamada no html
    let d1 = document.getElementById('d1')
    let d2 = document.getElementById('d2')
    let d3 = document.getElementById('d3')
    d1.innerHTML = 'CFB Cursos'
    d2.innerHTML = 'CFB Cursos'
    d3.innerHTML = 'CFB Cursos'
}