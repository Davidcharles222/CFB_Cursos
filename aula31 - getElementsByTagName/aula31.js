//no getelementsbytagname ela vem como HTML conection, sendo necessário o uso de spread para espalhamento dos elementos e utilização da tag MAP
const colecaoHTML = [...document.getElementsByTagName('div')]
console.log(colecaoHTML)

colecaoHTML.map((e)=>{
    console.log(e)
})