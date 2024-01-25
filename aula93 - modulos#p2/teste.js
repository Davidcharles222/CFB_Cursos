//exportando array
const cursos=['Javascript','HTML','CSS','C++','Python','C#']
export {cursos}


// podemos exportar tamém funções
const getTodosCursos=()=>{
    return cursos
}
export default getTodosCursos//exportando como padrão


//quando utilizamos da functon sem ser array function podemos chamar diredo dentro da função
export default function getTodosCursos(){
    return cursos
}

//podemos também referenciar a função por índice dentro do parâmetro
function getCurso(indice_curso){//pega primeira posição
    return cursos[indice_curso]
}
export {cursos}