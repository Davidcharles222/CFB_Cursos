//tira dúvidas dos comentários
let v1 = {nome:'Bruno'}
let v2 = {nome:'Bruno'}

console.log(v1===v2)//retornou falso pq para objetos precisa estar no mesmo endereço de armazenamento de memória

//Exemplo:

let v1 = {nome:'Bruno'}
let v2 = v1

console.log(v1===v2)