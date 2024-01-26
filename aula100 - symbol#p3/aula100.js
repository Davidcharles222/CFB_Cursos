const nome=Symbol('nome')
const numero=Symbol('numero')
const corUniforme=Symbol('cor do uniforme')

const jogador={
    nome:'j1'
}

//conhecidas também como formas ocultas 

jogador[numero]=10,//identificando o jugador como um symbol -> utilizando []
jogador[corUniforme]='amarelo'//identificando o jogador como um symbol -> utilizando []

for(p in jogador){//for só mostra as propriedades do jogador
    console.log(p)
}

console.log(jogador)
console.log(jogador.nome)
console.log(jogador[numero])
console.log(jogador[corUniforme])