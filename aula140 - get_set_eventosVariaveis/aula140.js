//Trabalhando com API
//chamando os dados direto no objeto literal e não na fetch
const p_temp=document.getElementById('p_temp')
const p_nivel=document.getElementById('p_nivel')
const p_press=document.getElementById('p_press')

let dados={
    _temperatura:0,
    _pressao:0,
    _nivel:0,

    set valores(val){
        this._temperatura=val.temperatura
        this._pressao=val.pressao
        this._nivel=val.nivel

        p_temp.innerHTML=this._temperatura
        p_nivel.innerHTML=this._nivel
        p_press.innerHTML=this._pressao
    },
    
    get valores(){
        return[this._temperatura,this._pressao,this._nivel]
    }
}


const buscarDados=()=>{
    const endpoint="https://55de2a05-034b-403b-895a-bf516234e35a-00-p15tjoznk7ri.kirk.replit.dev/"
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        dados.valores=res
    })
}

let intervalo=setInterval(buscarDados,2000)


