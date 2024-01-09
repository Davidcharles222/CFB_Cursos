//Utilizamos switch quando temos valores fixos, desta forma é mais viável
let colocacao = 5

switch(colocacao){
    case 1:
        console.log('Primeiro Lugar')
        break
    case 2:
        console.log('Segundo Lugar')
        break
    case 3:
        console.log('Terceiro Lugar')
        break
    case 4:
        console.log('Terceiro Lugar')
        break
    case 5: case 6: case 7://podemos utilizar desta forma também
        console.log('Premio de participacao')
        break
    default:
        console.log('Não subiu ao pódio')
        break
}

