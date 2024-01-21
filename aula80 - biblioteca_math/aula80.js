// Não preciso fazer a instância 'const mat=new Math()'
const mat=document.getElementById('mat')

// let num  = Math.random -> gera número aleatório
// let num0 = Math.floor -> gera um número de 0 até o definido ex. 10
// let num1 = Math.round -> gera um número inteiro de 0 até o anterior definido ex. 9 -> de 10

let num = Math.random()*10//random gera número de 0 a 1 em números decimas, para atribuir mais números só multiplicar pela quantidade que deseja.
let numconv = Math.round(num)//round converte em inteiro e pega de 0 a 10
//se não quisermos pegar o 0 é som somar mais 1

mat.innerHTML=numconv