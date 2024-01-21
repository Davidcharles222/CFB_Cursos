const div_data=document.getElementById('div_data')
const div_relogio=document.getElementById('div_relogio')
const btn_ativar=document.getElementById('btn_ativar')
const btn_parar=document.getElementById('btn_parar')
const tmp_alarme=document.getElementById('tmp_alarme')
const hora_alarme=document.getElementById('hora_alarme')
const timer=document.getElementById('timer')

const som_alarme=new Audio('alarme.mp3')
som_alarme.loop=-1//loop infinito

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

btn_ativar.addEventListener('click',(evt)=>{
    ts_atual=Date.now()
    ts_alarme=ts_atual+(tmp_alarme.value*1000)//transfornamando em milisegundos
    alarme_ativado=true
    const dt_alarme=new Date(ts_alarme)//transforma tdos milisegundos em data - hora

    const hor=dt_alarme.getHours() < 10?'0'+dt_alarme.getHours():dt_alarme.getHours()
    const min=dt_alarme.getMinutes() < 10?'0'+dt_alarme.getMinutes():dt_alarme.getMinutes()
    const sec=dt_alarme.getSeconds() < 10?'0'+dt_alarme.getSeconds():dt_alarme.getSeconds()

    hora_alarme.innerHTML=`Hora do Alarme: ${hor}:${min}:${sec}`
})

btn_parar.addEventListener('click',(evt)=>{
    alarme_ativado=false
    alarme_tocando=false
    hora_alarme.innerHTML='Hora do Alarme:'
    tmp_alarme.value=0
    timer.classList.remove('alarme')
    som_alarme.pause()
    som_alarme.currentTime=0//alarme volta ao inicio 0
})


//DATA
const data = new Date()

const dia=data.getDate() < 10?'0'+data.getDate():data.getDate()
const mes=data.getMonth() < 10?'0'+data.getMonth():data.getMonth()
const ano=data.getFullYear() < 10?'0'+data.getFullYear():data.getFullYear()
const data_r=dia+'/'+mes+'/'+ano
div_data.innerHTML = data_r

//HORA
const relogio=()=>{
    const hora = new Date()
    const hor=hora.getHours() < 10?'0'+hora.getHours():hora.getHours()
    const min=hora.getMinutes() < 10?'0'+hora.getMinutes():hora.getMinutes()
    const sec=hora.getSeconds() < 10?'0'+hora.getSeconds():hora.getSeconds()
    const hora_formatada = `${hor}:${min}:${sec}`
    div_relogio.innerHTML = hora_formatada
    if(alarme_ativado && !alarme_tocando){
        if(hora.getTime() >= ts_alarme){
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add('alarme')
        }
    }
}

//setInterval - recebe a função relogio e atualiza o relógio a cada 1 segundo '1000'
const intervalo = setInterval(relogio,1000)

//-------------------------------------------------------

//getDate() = Dia do mês
//getDay() = Dia da Semana (número)
//getFullYear() = Ano com 4 dígitos
//getHours() = Horas
//getMilliseconds() = Milisegundos
//getMinutes() = Minutos
//getMonth() = Mês
//getSeconds() = Segundos
//getTime() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
//Date.now() = Timestamp (minisegundos desde 1 de janeiro de 1971, 00:00:00 UTC)
//getTimezoneOFFset() = Timezone da localidade
//setDate() = Define um dia do mês para a data
//setMonth() = Define um mês para a data
//setFullYear() = Define um ano para a data
//setHours() = Define horas
//setMinutes() = Define minutos
//setSeconds() = Define segundos
//setMilliseconds() = Define milisegundos
//toDateString() = Retorna somente a data
