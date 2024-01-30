import {Cxmsg} from "./cxmsg.js"
const config={
    cor:'#48f',
    tipo:'ok',
    textos:['SIM','NÃO'],
    comando_sn:()=>{}
}

const fsim=()=>{
    console.log('Botão SIM pressionado')
}

const btn_mostrarcxmsg1=document.getElementById('btn_mostrarcxmsg1')
const btn_mostrarcxmsg2=document.getElementById('btn_mostrarcxmsg2')
const btn_mostrarcxmsg3=document.getElementById('btn_mostrarcxmsg3')

btn_mostrarcxmsg1.addEventListener('click',(evt)=>{
    config.tipo='ok'
    Cxmsg.mostrar(config,'CFB Cursos', 'Curso de Javascript')
})

btn_mostrarcxmsg2.addEventListener('click',(evt)=>{
    config.tipo='sn'
    config.comando_sn=()=>{fsim()}
    Cxmsg.mostrar(config,'Youtube','Canal com cursos de programação')
})

btn_mostrarcxmsg3.addEventListener('click',(evt)=>{
    config.tipo='sn'
    config.textos=['OK','CANCELA']
    config.comando_sn=()=>{}
    Cxmsg.mostrar(config,'Javascript','Aula 138')
})