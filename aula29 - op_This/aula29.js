//faz referência ao nome da própria função

function aluno(nome, note){
    this.nome = nome//utilizando parametro nome como variável, neste caso preciso declarar o this para usar variavel de mesmo nome.
    this.nota = nota

    console.log(nome)
    console.log(nota)
}
aluno('Bruno, 100')

//-----------------------------------------------

function aluno (nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_arrow = function(){
        setTimeout(()=>{//settimeout atrasa o resultado -> somente com a arrow function que da certinho desta forma
            console.log(this.nome)
            console.log(this.nota)
        },2000)//atraso de 2 seconds
    }
}
const al1 = new aluno('Bruno', 100)//chamada
al1.dados_arrow()