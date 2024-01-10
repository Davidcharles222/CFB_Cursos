//Spread -> Espalha valores


const jogador1 = {nome:'Bruno',energia:100,vidas:3,magia:150}
const jogador2 = {nome:'Bruce',energia:100,vidas:5,velocidade:80}
const jogador3 = {...jogador1,...jogador2}

console.log(jogador3)//absolve todos os valores, de mesma categoria mantém sempre o ultimo e as categorias diferentes também absolve

//---------------------------------------

//Outro exemplo
const soma = (v1,v2,v3)=>{
    return v1+v2+v3
}

let valores = [1,5,4,10]

console.log(soma(...valores))//precisa espalhar os valors para conseguir somar nesta função

//---------------------------------------

const objs1=document.getElementsByTagName("div")//sem o spread só conseguimos acessar elementos do html ex. objs. >> aparecerá somente alguns > ite, length, name...
const objs2=[...document.getElementsByTagName('div')]//desta form a consta objs2 vira uma array, quando espalhamos os elementos temos todos acesso as tab do node

objs2.forEach(Element => {//consigo visualizar somente os elementos nas arrays.
    console.log(Element)
})

objs2.forEach(Element => {//consigo alterar todos elementos da div quando utilizamos a array
    Element.innerHTML='curso'
})

console.log(objs1)//html collection -> conseguimos visualizar no inspecionar
console.log(objs2)//array -> conseguimos visualizar no inspecionar