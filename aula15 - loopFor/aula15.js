//loop é considerado como interação
//FOR -> loop definido -> quando sabemos quantas vezes ele deve interar
//FOR (INICIALIZAÇÃO, TESTE LÓGICO OU CONDIÇÃO, ENCREMENTO)
//enquando a condição for verdadeira ele intera, quando for falso ele sai do loop

for (let i=0; i < 10; i++){
    console.log("posição "+i)
}

//---------------------------------------

for (let i = 0; i < 10; i++){
    if(i%2==0){// na programação o 0 é falso e 1 é impar
        console.log(i +' e par')
    }else{
        console.log(i +' e impar')
    }
}
