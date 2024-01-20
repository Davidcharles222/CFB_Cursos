const div_data=document.getElementById('div_data')
const div_relogio=document.getElementById('div_relogio')


const relogio=()=>{
    const hora = new Date()
    const hor=hora.getHours() < 10?'0'+hora.getHours():hora.getHours()
    const min=hora.getMinutes() < 10?'0'+hora.getMinutes():hora.getMinutes()
    const sec=hora.getSeconds() < 10?'0'+hora.getSeconds():hora.getSeconds()
    const hora_formatada = `${hor}:${min}:${sec}`
    div_relogio.innerHTML = hora_formatada
}

//setInterval - recebe a função relogio e atualiza o relógio a cada 1 segundo '1000'
const intervalo = setInterval(relogio,1000)


//-----------------------------------------------------


// const data = new Date()
// const dia=data.getDate() < 10?'0'+data.getDate():data.getDate()
// const mes=data.getMonth() < 10?'0'+data.getMonth():data.getMonth()
// const ano=data.getFullYear() < 10?'0'+data.getFullYear():data.getFullYear()

// const data_r=dia+'/'+mes+'/'+ano
// div_data.innerHTML = data_r

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