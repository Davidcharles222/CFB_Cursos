class jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[new jogador('j1'),new jogador('j2'),new jogador('j3'),new jogador('j4')]//todos os j. atribuidos no nome da class

let s=[]

let todos_jog = jogadores.map((j)=>{
    return j.nome//percorre a array jogadores e retorna somente os nomes
})

let s_jogadores=jogadores.filter((j)=>{
    return j.nome =='j1'//percorre a array jogadores onde o nome seja igual a j1 e retorne todos os nomes iguais j1
})

s=s_jogadores.map((j)=>{
    return j.id//percorra todos s_jogadores e retorne os id da array
})


console.log(todos_jog)
console.log(s_jogadores)
console.log(s)