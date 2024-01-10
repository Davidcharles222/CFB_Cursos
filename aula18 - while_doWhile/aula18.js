//situações indefinidas, quando não sabemos quantas vezes ele irá interar no loop

//while -> enquanto a condição for verdadeira faça o teste lógico
//while -> faça o teste lógico depois vai para condição enquanto


let n = 10
while(n<10){//Neste teste lógico se for falso, ele não entrará no loop
    console.log('CFB Cursos')
    n++
}
console.log('Fim do programa')

//---------------------------------------

let n = 10
do{//Neste teste lógico sé for falso, ele irá executar o comando pelo menos uma vez e sair do loop
    console.log('CFB Cursos')
    n++
}while(n<10)
console.log('fim do programa')