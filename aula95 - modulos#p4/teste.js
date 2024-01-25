class Cursos{
    //quando utilizamos o static não precisamos instanciar a class
    static cursos=['Javascript','HTML','CSS','C++','Python','Java']

    constructor(){}

    static getTodosCursos=()=>{
        return this.cursos//função retornar todos os cursos
    }

    static getCurso=(i_curso)=>{
        return this.cursos[i_curso]//função para retornar o curso no índice que eu selecionar na outra págia
    }

    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)//função para adicionar novo curso no parametro que eu escrever na outra página
    }
    
    static apagarCursos=()=>{
        this.cursos=[]//função para apagar os cursos, onde a array cursos recebe vazio
    }

}

export default Cursos//aqui chamo a classe que vai todos os métodos juntos


