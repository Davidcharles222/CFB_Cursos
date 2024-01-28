const f_nome=document.querySelector('#f_nome')
const f_nota=document.querySelector('#f_nota')
const f_msg=document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener('click',(evt)=>{
    let msg=null

    if(!f_nota.checkValidity()){//se o método de validação for falso
        msg=f_nota.validationMessage//msg recebe a mensagem da propriedade de validação
    }
    
    f_msg.innerHTML=msg
    evt.preventDefault()//Este método não aciona o submit quando clicado
})


//****** Métodos de validação do DOM *******
//checkValdity()
//setCustomValidity()

//****** Propriedade de validação do DOM *******
//validity
//validationMessage

//****** Propriedades de validação *********
/*
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
stepMismatch: true, se o valo de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
valid: true, se o valor de um elemento for válido.
*/