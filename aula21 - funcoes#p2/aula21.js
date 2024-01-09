//Somente um retorno por vez

/*
function canal(){//pronta para ser executada --> retorna o valor 20
    let n1 = 10
    let n2 = 2
    let res = n1*n2
    return res //Neste caso ele irá somente retornar o valor
}
let num = canal()//Let num recebe o valor da função canal que é 20
console.log(num)//utilizamos a camada nesta forma com console
*/

//--------------------------------------------------------------------

function canal(){//pronta para ser executada --> retorna o valor 20
    let n1 = 10
    let n2 = 2
    let res = n1*n2
    if (res%2 == 0)//se 20 dividido por 2 for igual a 0
        return 'Par'//retorne par
    else//caso contrario
        return 'Impar'//retorne impar
}
let res = canal()//let res recebe o valor de par
console.log(res)//console imprime o valor de res na tela


