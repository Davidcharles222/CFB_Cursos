import { Cxmsg } from "./cxmsg.js";

const callback_ok=()=>{}

const constcallback_naook=()=>{
    const config={
        cor:'#800',
        tipo:'ok',
        textos:null,
        comando_sn:()=>{},
    }
    Cxmsg.mostrar(config,'Erro','Login não efetuado! Usuário ou senha incorretos.');
}

const configlogin={
    cor:'048',
    img:'logo.png',
    endpoint:"https://371704cc-1f42-402a-bd42-3f1864b7f798-00-4bt7ox3wijnv.kirk.replit.dev"
}
Login.login(callback_ok,constcallback_naook,configlogin);

