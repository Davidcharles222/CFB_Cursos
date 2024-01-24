//LOCATION -> Redireciona para páginas que mencionarmos https ou páginas internas
//HISTORY -> Redirecina para sites que constam no histórico

const url=document.getElementById('url')
const btn_url=document.getElementById('btn_url')

btn_url.addEventListener('click',(evt)=>{
    /*
    window.location='https://www.google.com.br'// podemos também utilizar pastas internas
    window.location.replace('https://www.google.com.br')// redireciona e deleta a url da corrente do histórico não sendo possível voltar com a seta
    window.location.assign('https://www.google.com.br')//não deleta a url do histórico, sendo possível voltar com a seta
    window.location.reload()//carrega a página
    window.history.back()//redireciona para página anterior
    window.history.forward()//redirecionar para página seguinte
    window.history.go(1)//redirecionar para próxima pagaina 1, podemos colocar de acordo com o hisórico de páginas
    */
    window.location=url.value//direcionando para a url mencionada no input
})