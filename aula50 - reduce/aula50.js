//REDUCE -> pega todos valores da array e faz a soma entre o número anterior e o atual.

const p_array=document.querySelector('#array')
const btnReduzir=document.querySelector('#btnReduzir')
const resultado=document.querySelector('#resultado')

const elementos_array=[1,2,3,4,5]//lista criada
let ant=[]//vetor ant será incluido no push abaixo
let atu=[]//vetor atu será incluido no push abaixo
let dobro=[]//vetor dobro será incluido no push abaixo

p_array.innerHTML= '['+elementos_array+']'//mostrando lista no campo array

btnReduzir.addEventListener('click',(evt)=>{//criando evento click botão
    dobro.push(elementos_array[0]*2)//dobro recebe no vetor o primeiro valor da array vezes 2

    resultado.innerHTML=elementos_array.reduce((anterior,atual,pos)=>{//reduce pega valor anterior e atual da array e soma um com outro
        ant.push(anterior)//vetor ant recebe valor anterior da array
        atu.push(atual)//vetor atu recebe valor atual da array
        dobro.push(atual*2)//vetor dobro recebe valor atual x2 da array

        return atual+anterior//retornando valor atual e anterior da array
    })
    resultado.innerHTML+='<br/>V.anterior: '+ant+'<br/>V.atual:'+atu+'<br/>Dobro:'+dobro
})