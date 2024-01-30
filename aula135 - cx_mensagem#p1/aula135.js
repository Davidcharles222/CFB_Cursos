const config={
    cor:'#48f'
}

const cxmsg=new Cxmsg(config)

const btn_mostrarcxmsg1=document.getElementById('btn_mostrarcxmsg1')
const btn_mostrarcxmsg2=document.getElementById('btn_mostrarcxmsg2')
const btn_mostrarcxmsg3=document.getElementById('btn_mostrarcxmsg3')

btn_mostrarcxmsg1.addEventListener('click',(evt)=>{
    cxmsg.mostrar('CFB Cursos', 'Curso de Javascript')
})

btn_mostrarcxmsg2.addEventListener('click',(evt)=>{
    cxmsg.mostrar('Youtube','Canal com cursos de programação')
})

btn_mostrarcxmsg3.addEventListener('click',(evt)=>{
    cxmsg.mostrar('Javascript','Aula 136')
})