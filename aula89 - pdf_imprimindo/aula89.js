//para imprimir utilizamos do método print, porém ele imprime a tela toda, nesse exercício criamos o printo somente da tabela

const btn_imp=document.getElementById('btn_imp')

btn_imp.addEventListener('click',(evt)=>{
    //pega todo codigo html digitado e atribui em conteudo
    const conteudo=document.getElementById('tabela').innerHTML
    

    //aqui criamos todo nosso estilo css e atribuimos a estilo
    let estilo = '<style>'
    estilo+='table {width: 100%; font: 25px Calibri;}'
    estilo+='table, th, td {border: solid 2px #888; border-collapse: collapse;'
    estilo+='padding: 4px 8px; text-align: center;}'
    estilo+= '</style>'


    //aqui definirmos a abertura de uma nova janela do google com os tamanos de 700x700
    const win=window.open('','','height=700,width=700')


    //nessa nova janela irá aparecer estas informações abaixo
    //escrevendo todo conteudo do html com css na minha nova janela
    win.document.write('<html><head>')
    win.document.write('<title>CFB Cursos</title>')
    win.document.write(estilo)//meu css criado la em cima
    win.document.write('</head><body>')
    win.document.write(conteudo)
    win.document.write('</body></html>')


    //chamando método de imprimir
    win.print()


    //fecha janelinha aberta também - que foi criada
    win.close()
})