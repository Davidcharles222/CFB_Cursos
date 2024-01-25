//importando array
import { cursos } from "./teste.js";
console.log(cursos)


//quando importamos alguma coisa como defalt ou seja padrão, não colocamos dentro de colchetes
import getTodosCursos from "./teste.js"
console.log(getTodosCursos())


//chamando a função com índice 1
import getCurso from "./teste.js"
console.log(getCurso(0))//posição 0


//Obs. só podemos acinar uma vez o exporte defalt