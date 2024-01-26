//objetos strings -> não são variáveis comuns

let nome = new String('Bruno Pinho')
let nome2 = new String('Bruno')
let nome3 = new String(nome.toLocaleUpperCase)
let canal = new String('CFBCursos')

console.log(nome)//retorna a string nome
console.log(typeof(nome))//retorna qual tipo é o nome

console.log(nome.charAt(0))//retorna o caracter de posição 0 da variante nome
console.log(nome.charAt(1))//retorna o caracter de posição 1 da variante nome

console.log(nome.charCodeAt(0))//retorna o cod do caracter da posição 0 da variante nome

console.log(nome.concat(canal))//concatena o valor nome na variante canal

console.log(nome.indexOf('o'))//retorna a posição INDICE do primeiro caracter encontrado com a letra o, se não encontrar ele retorna -1

console.log(nome.lastIndexOf('o'))//retorna a posição INDICE do ultimo caracter encontrado com a letra o, se não encontrar ele retorna -1

console.log(nome.localeCompare(nome2))//compara se o valor do nome é igual ao nome2, retorna verdadeiro '0' ou 1 se -> a string comparada é maior no tamanho , ou -1 na string comparada é menor de tamanho

console.log(nome.replace('Bruno','David'))//substitui o valor de bruno para david, tanto para string completa quanto para caracteres

console.log(nome.search('Pinho'))//retorna qual posição encontra a palavra pesquisada, sempre a referencia é a primeira letra da string

console.log(nome.slice(6,11))//faço um corte da string que inicia na posição 6 até a 11 e retorna somente o corte feito

let arr_nome=nome.split(' ')//faz o recorte onde tem espaço e transforma cada pedaço em uma string (desta forma ele cria uma array com vários indices diferentes)
console.log(arr_nome)

let parte1=nome.substring(6,11)//retorna a string que inicia na posição 6 e vai até a posição 11 -> parecida com a splice
console.log(parte1)

let parte2=nome.substr(6,5)//retorna a string que inicia na posição 6 com o tamanho de 5 caracter
console.log(parte2)

console.log(nome.toUpperCase())//retorna toda string em letra maiúscula
console.log(nome.toLocaleUpperCase())//retorna toda string em letra maiúscula

console.log(nome3.toLowerCase())//retorna toda string em letra minúscula
console.log(nome3.toLocaleLowerCase())//retorna toda string em letra minúscula

console.log(nome.valueOf())//retorna o valor primitivo da string

let num=10
num=num.toString()//converte o tipo number em string
console.log(typeof(num))

