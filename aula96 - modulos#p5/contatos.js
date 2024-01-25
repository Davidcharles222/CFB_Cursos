//importamos a array contatos de bancoContatos-> neste caso vazia
import { contatos } from "./bancoContatos.js";

//criando um objeto literal contato
let contato={
    getTodosContatos:function(){//função para retornar contatos
        return contatos
    },

    getContato:function(i_cont){//função para pegar contatos de acordo com índice selecionado
        return contatos[i_cont]
    },

    addContato:function(novoContato, destinoDOM){//função para adicionar contatos
        //novoContato irá receber os parâmetros de nome, telefone e email
        const cont={//função cont para aparecer também no console
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(cont)

        destinoDOM.innerHTML=''
        contatos.forEach((c)=>{
            const div=document.createElement('div')//criando div 
            div.setAttribute('class','contato')//setando a class na div
            const p_nome=document.createElement('p')//criando p
            p_nome.innerHTML=c.nome//paragrafo recebe novoContato.nome que será chamado na janela aula96
            const p_telefone=document.createElement('p')//criando p
            p_telefone.innerHTML=c.telefone//paragrafo recebe novoContato.telefone que será chamado na janela aula96
            const p_mail=document.createElement('p')//criando p
            p_mail.innerHTML=c.email///paragrafo recebe novoContato.email que será chamado na janela aula96
    
            div.appendChild(p_nome)//anexar na div o nome
            div.appendChild(p_telefone)//anexar na div o telefone
            div.appendChild(p_mail)//anexar na div o email
    
            destinoDOM.appendChild(div)//anexar no destinoDom a div criada
            

        })
    }
}


