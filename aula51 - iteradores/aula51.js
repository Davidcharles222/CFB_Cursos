//INTERATOR -> o sistema já tem esta funcionalidade implementada, para que o programa entende se já percorreu toda array ele utiliza do interador, conforme exemplo abaixo.

const texto = 'Youtube'
const it_texto=texto[Symbol.iterator]()

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())