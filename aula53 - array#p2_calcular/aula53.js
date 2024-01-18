//array nos possibilita de utilizar de funções dentros delas separando-as em índices.

const btn_soma=document.querySelector('#btn_soma')
const btn_subtracao=document.querySelector('#btn_subtracao')
const btn_multiplicacao=document.querySelector('#btn_multiplicacao')
const btn_divisao=document.querySelector('#btn_divisao')
const res=document.querySelector('#res')

const op=[//arrya op criada para as funções
    ()=>{//função array function
        const val=[document.getElementById('valor1').value]//val recebe valor do input que for digitado no valor 1
        const val2=[document.getElementById('valor2').value]//val2 recebe valor do input que for digitado no valor 2

        res.value=Number(val)+Number(val2)//res recebe val + val2
    },
    ()=>{//função array function
        const val=[document.getElementById('valor1').value]//val recebe valor do input que for digitado no valor 1
        const val2=[document.getElementById('valor2').value]//val2 recebe valor do input que for digitado no valor 2

        res.value=Number(val)-Number(val2)//res recebe val - val2
    },
    ()=>{//função array function
        const val=[document.getElementById('valor1').value]//val recebe valor do input que for digitado no valor 1
        const val2=[document.getElementById('valor2').value]//val2 recebe valor do input que for digitado no valor 2

        res.value=Number(val)*Number(val2)//res recebe val * val2
    },
    ()=>{//função array function
        const val=[document.getElementById('valor1').value]//val recebe valor do input que for digitado no valor 1
        const val2=[document.getElementById('valor2').value]//val2 recebe valor do input que for digitado no valor 2

        res.value=Number(val)/Number(val2)//res recebe val / val2
    }
]

btn_soma.addEventListener('click',op[0])//adicionando evento click no btn soma op [0]
btn_subtracao.addEventListener('click',op[1])//adicionando evento click no btn subracao op [1]
btn_multiplicacao.addEventListener('click',op[2])//adicionando evento click no btn multiplicacao op [2]
btn_divisao.addEventListener('click',op[3])//adicionando evento click no btn divisao op [3]

//--------------------------------------------------------------

// SIMPLIFICANDO DO MEU JEITO
const btn_soma=document.querySelector('#btn_soma')
const btn_subtracao=document.querySelector('#btn_subtracao')
const btn_multiplicacao=document.querySelector('#btn_multiplicacao')
const btn_divisao=document.querySelector('#btn_divisao')
const valor1=document.getElementById('valor1')
const valor2=document.getElementById('valor2')
const res=document.getElementById('res')

const op=[
    ()=>{
        let val = [Number(valor1.value),Number(valor2.value)]
        res.value = val[0] + val[1]
    },
    ()=>{
        let val = [Number(valor1.value),Number(valor2.value)]
        res.value = val[0] - val[1]
    },
    ()=>{
        let val = [Number(valor1.value),Number(valor2.value)]
        res.value = val[0] * val[1]
    },
    ()=>{
        let val = [Number(valor1.value),Number(valor2.value)]
        res.value = val[0] / val[1]
    }
]

btn_soma.addEventListener('click',op[0])
btn_subtracao.addEventListener('click',op[1])
btn_multiplicacao.addEventListener('click',op[2])
btn_divisao.addEventListener('click',op[3])