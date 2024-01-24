const btn_alert=document.getElementById('btn_alert')
const btn_confirm=document.getElementById('btn_confirm')
const btn_prompt=document.getElementById('btn_prompt')

btn_alert.addEventListener('click',(evt)=>{
    alert('Olá, como você está?')//somente mensagem alerta
})

btn_confirm.addEventListener('click',(evt)=>{
    confirm('Você está aprendendo muito?')//retorna true ou falso
})

btn_prompt.addEventListener('click',(evt)=>{
   let nomes = prompt('Digite seu nome:')//campo digitar
})
