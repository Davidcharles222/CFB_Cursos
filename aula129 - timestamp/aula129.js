//CRONÔMETRO
const timer=document.getElementById('timer')

const tmpini=Date.now()

const contador=()=>{
    const tmpatual=Date.now()
    let cont=tmpatual-tmpini
    let seg=(tmpatual-tmpini)/1000//transformando em segundos
    console.log(seg)
    timer.innerHTML=converter(seg)
}

const converter=(seg)=>{
    const hora=Math.floor(seg/3600)//dividindo segundos e 3600 segundos que tem o ano -> que aí conseguimos a hora
    const resto=seg%3600
    const minuto=Math.floor(resto/60)
    const segundo=Math.floor(resto%60)
    const form=(hora<10?'0'+hora:hora)+':'+(minuto<10?'0'+minuto:minuto)+':'+(segundo<10?'0'+segundo:segundo)


    return form
}


setInterval(contador,1000)