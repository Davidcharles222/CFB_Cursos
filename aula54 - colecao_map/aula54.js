// ------> CHAVE / VALOR

// set  ---> seta o valor na lista 'inclui na lista'
// delete ---> deleta o valor da lista de acordo com a chave selecionada
// has ---> verifica se tem o valor da chave solicitado na lista 
// get ---> pega o valor da chave solicitada na lista
// size ---> informa o tamanho da string do valor da chave solicitada
// forEach ---> percorre os valores da lista 

const caixa=document.querySelector('#caixa')

let mapa=new Map()

mapa.set('curso','Javascript')//setando chave curso com valor Javascript
mapa.set(10,'CFB Cursos')//setando chave 10 com valor CFB Cursos
mapa.set(1,100)//setando chave 1 com valor 100
mapa.set('canal',100)//setando chave canal com valor 100

mapa.delete(1)//deletando onde esta a chave 1 -> valor 100

console.log(mapa)

let pes='curso'//atribuindo string teste no pes
let res=''//atribuindo vazio na let res

if(mapa.has(pes)){//se na lista de mapa tem valor teste de pes
    res='A chave existe na coleção com o valor: ' + mapa.get(pes)//res recebe o texto mais o pega o valor da chave do pes 
}else{
    res='A chave NÃO está na coleção'
}

res+='<br/> O tamanho da coleção é ' + mapa.size//res recebe o valor do texto mais o tamanho da string
caixa.innerHTML = res//mostre valor de res na caixa

mapa.forEach((el)=>{//na lista de mapa percorrer todos elementos 
    console.log(el)
})