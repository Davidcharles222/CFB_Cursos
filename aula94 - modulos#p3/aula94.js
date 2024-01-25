//dessa forma importo todos codigos da pagina teste.js -> nomeio ela com m_cursos ou qualquer outro nome e sempre chamo a tag ou função com um ponto
import * as m_cursos from './teste.js'
console.log(m_cursos.cursos)

//quando é uma função padrão apenas referenciamos com o defautl
console.log(m_cursos.default())


//podemos nomear por parte também -> para funções default não colocamos dentro dos colchetes, ai só coloquei para exemplificar
import { cursos as c, getTodosCursos as gc } from './teste.js'
console.log(c)
console.log(gc)