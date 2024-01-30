import {Cxmsg} from "./cxmsg.js"
const config={
    cor:'#48f'
}
Cxmsg.config(config)


const btn_mostrarcxmsg1=document.getElementById('btn_mostrarcxmsg1')
const btn_mostrarcxmsg2=document.getElementById('btn_mostrarcxmsg2')
const btn_mostrarcxmsg3=document.getElementById('btn_mostrarcxmsg3')

btn_mostrarcxmsg1.addEventListener('click',(evt)=>{
    Cxmsg.mostrar('CFB Cursos', 'Curso de Javascript')
})

btn_mostrarcxmsg2.addEventListener('click',(evt)=>{
    Cxmsg.mostrar('Youtube','Canal com cursos de programação')
})

btn_mostrarcxmsg3.addEventListener('click',(evt)=>{
    Cxmsg.mostrar('Javascript','Aula 138')
})