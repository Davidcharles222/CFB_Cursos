//Momentos em que o ponto e vírgula se faz obrigatório

//Sempre que a linha de baixo iniciar com colchetes,chaves ou parenteses da erro
let numeros=[10,10,30]//ou informo a vírgula nesta linha
[n1,n2,n3]=numeros//ou informamos o let antes do colchete
console.log(n1)
console.log(n2)
console.log(n3)

//---------------------------------

let num={
    n1:10,
    n2:20,
    n3:30
}
{n1,n2,n3}=num//neste caso não cabe o ponto e vírgula na linha anterior, somente o let antes para declarar
console.log(n1)
console.log(n2)
console.log(n3)

//----------------------------------------------------

let n=null;//nesse caso precisa do ponto e vírgula na linha anterior
(n=10)//parentese no início
console.log(n)

//---------------------------------------------

let n1=[1,2]
let n2=[3,4];//nesse caso precisa do ponto e vírgura
[n1,n2].map(v=>console.log(v))//colchete no início

//----------------------------------------

let i=null ; i=0//nesse caso precisa separar a nova declaração
console.log(i)