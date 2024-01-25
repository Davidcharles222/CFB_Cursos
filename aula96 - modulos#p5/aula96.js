import c from './contatos.js'//importando default contato

const listaContatos=document.getElementById('listaContatos')
const btn_gravar=document.getElementById('btn_gravar')


btn_gravar.addEventListener('click',(evt)=>{//criando evento de click botao
    const cont={//criando um objeto literal
        nome:document.getElementById('f_nome').value,//o parametro nome criado na outra janela receberá o valor da f_nome
        telefone:document.getElementById('f_telefone').value,//o parametro telefone criado na outra janela receberá o valor da f_nome
        email:document.getElementById('f_email').value//o parametro email criado na outra janela receberá o valor da f_nome
    }
    c.addContato(cont,listaContatos)//passando os dados preenchidos nos imputs no objeto cont no parametro novoContato da outra janela e passando a listaContatos para destinoDOM onde será anexado as div 
    console.log(c.getTodosContatos())
})

