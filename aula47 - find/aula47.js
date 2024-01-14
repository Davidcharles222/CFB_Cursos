//FIND -> pesquisar valor solicitado em uma array, se encontrar ele retorna true, mesmo parâmetro de map e filter

const p_array=document.querySelector('#array')
const txt_pesquisar=document.querySelector('#txt_pesquisar')
const btnPesquisar=document.querySelector('#btnPesquisar')
const resultado=document.querySelector('#resultado')

const elementos_array=[10, 20, 5, 4, 46, 22]//lista criada
p_array.innerHTML= '['+elementos_array+']'//mostrando lista no campo array

btnPesquisar.addEventListener('click',(evt)=>{//criando evento click botão
    resultado.innerHTML='Valor não encontrado'//se sair do if mostre esta msg,como else

    const ret = elementos_array.find((el,ind)=>{//utilizando o find, parecido com map e filter
        if(el == txt_pesquisar.value){//se elementos percorridos for igual ao texto que será digitado
            resultado.innerHTML='Valor encontrado ' + el + ' na posição ' + ind//retorne isso no resultado
            return el
        }
    })
})