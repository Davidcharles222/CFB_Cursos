//EVERY -> retorna true de acordo com o que foi pesquisado, porém todos elementos precisa condizer com minha pesquisa, caso não for todos elementos irá retornar falso, mesmo procedimento de parâmetros do map, filter e find.

const p_array=document.querySelector('#array')
const btnVerificar=document.querySelector('#btnVerificar')
const resultado=document.querySelector('#resultado')

const elementos_array=[21,25,19,20,16,18,22]//lista criada
p_array.innerHTML= '['+elementos_array+']'//mostrando lista no campo array

btnVerificar.addEventListener('click',(evt)=>{//criando evento click botão
    
    const ret = elementos_array.every((el,ind)=>{//utilizando every com array function
        if(el < 18){//se elementos for menor que 18
            resultado.innerHTML='Array não conforme na posição ' + ind//faça isso
        }
        return el >= 18//retorna valor true se for maior que 18
    })
    if(ret){//se ret for true
        resultado.innerHTML = 'OK'//mostra ok no resultado
    }

})