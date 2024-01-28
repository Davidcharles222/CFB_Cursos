const long=document.getElementById('long')
const lati=document.getElementById('lati')

//se a geolocalização estiver ativada
if(navigator.geolocation){
    //geolocalização recebe a função de sucesso e a de erro
    navigator.geolocation.getCurrentPosition(mostrarLocalização,erroLocalização)
}else{
    console.log('Geolocalização não suportada')
}

//pegar a posição
function mostrarLocalização(pos){
    //console.log(pos)
    lati.innerHTML=`Latitude: ${pos.coords.latitude}`
    long.innerHTML=`Longitude: ${pos.coords.longitude}`
}

function erroLocalização(){
    console.log('Erro ao obter a localização')
}