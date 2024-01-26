// Expressoes regulares
// i -> ignora o kasesensitive
// g -> global

let nome=new String('Bruno Pinho Campos 1978')
let email='bruno@bruno.com.br'
let numeros='1, 10, 100, 1000'

console.log(nome.search(/pinho/i))//ignora o kasesensitive e retorna a posição da string pinho, mesmo iniciando em minúscula
console.log(nome.match(/O/ig))//retorna todos os O encontrados, ignorando o sensitive e global para todos e não somente o primeiro encontrado

console.log(nome.replace(/o/ig,'Teste'))//substitui todos o em Teste, ignorando o kasesensitive e global

//TRABALHANDO COM LIMITAÇÕES
console.log(nome.match(/[a-g|h-z|0-9]/ig))//retorne todas expressoes que inicia de a ate g, de h ate z e de 0 ate 9

//METACARACTERES
console.log(nome.match(/\d/ig))//retorna valores numéricos
console.log(nome.match(/\s/ig))//retorna espaços vazios
console.log(nome.match(/\bP/ig))//retorna caracteres de P

//QUANTIFICADORES
//mostra os caracteres juntos dependendo de acordo com a string
console.log(numeros)
console.log(numeros.match(/10/ig))//retorna todos numeros 10 encontrados
console.log(numeros.match(/10+/ig))//retorna todos numeros 10 encontrados, porém com a string completa
console.log(numeros.match(/10*/ig))//retorna todos numeros encontrados entre 1 ou 0 da string
console.log(numeros.match(/10?/ig))//retorna todos numeros encontrados entre 1 ou 0 da string, porém ser retornar a string completa 