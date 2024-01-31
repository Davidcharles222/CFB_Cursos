import { Login } from "./login.js";
import { Cxmsg } from "./cxmsg.js";

const callback_ok=()=>{
    
}

const constcallback_naook=()=>{
    const config={
        cor:'#800',
        tipo:'ok',
        textos:null,
        comando_sn:null,
    }
    Cxmsg.mostrar(config);
}

Login.login(callback_ok,constcallback_naook);

