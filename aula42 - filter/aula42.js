//valor, indice, arr -> no parâmetro, mesmo de MAP


const idades = [15,21,30,17,18,44,12,50]//criando elementos 'idades'

const maior = idades.filter((val,ind,arr)=>{//filtrarem idades valores, precisa chamar função arrow function - atribuir todo valor em maior
    if(val >= 18)//se valor de maior for maior ou igual 18
    return val//retorna os valores maiores
})

const menor = idades.filter((val,ind,arr)=>{//filtrarem idades valores, precisa chamar função arrow function - atribuir todo valor em menor
    if(val < 18)//se valor de maior for menor que 18
    return val//retorna os valores menores
})

console.log(idades)//mostre todas idades
console.log(maior)//mostra todas maior
console.log(menor)//mostra todas menor