//loop quando não sabemos a quantidade que ele irá rodar
//enquando condição for verdadeira - irá realizar o comando, quando falso sair do loop

/*
let dia = 1

while (dia < 10){
    console.log(dia)
    dia++
}
*/

//fatorial de 5! = 5*4*3*2*1 = 120

let n = 5
let fat = 1

while(n>=1){//enquanto 5 for maior ou igual a 1
    fat*=n
    n--
    //fat recebe 5 -->  "5 * 1 = 5"
    //n perde 1 = fica 4
    //vai voltar no loop fat recebe 20 --> "5 * 4 = 20"
    //n perde 1 = 3
    //vai voltar no loop fat recebe 60 --> "20 * 3 = 60"
    //n perde 1 = 2
    //vai voltar no loop fat recebe 120 --> "60 * 2 = 120"
    //n perde 1 = 1
    //vai voltar no loop fat recebe 120 --> "120 * 1 = 120"
}