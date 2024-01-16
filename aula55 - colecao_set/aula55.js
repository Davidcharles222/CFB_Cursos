//SET --> Não permite entrada de valores duplicados de elementos

const caixa=document.querySelector('#caixa')

let musicas=new Set(['musica1','musica boa','musica10'])//podemos adicionar os dados direto no parâmetro da set

musicas.add('musica muito legal')//adicionando valores na lista
musicas.add('musica1')//como valor já consta na lista ele não irá aceitar
musicas.add('musica1')//como valor já consta na lista ele não irá aceitar
musicas.add('musica10')//como valor já consta na lista ele não irá aceitar

musicas.delete('musica1')//deletando valor musica1
musicas.clear()//limpando todos dados da lista

console.log(musicas)

musicas.forEach((el)=>{//percorrendo todos valores da lista
    caixa.innerHTML+=el + '<br/>'
})

for(let m of musicas){//percorrendo todos valores da lista
    caixa.innerHTML+=m + '<br/>'
}