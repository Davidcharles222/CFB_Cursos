//objetos literais

const Pessoa={

    nome:'',
    idade:'',

    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },

    setNome:function(nome){
        this.nome=nome
    },
    setIdade:function(idade){
        this.idade=idade
    },

}
Pessoa.setNome('David')
Pessoa.setIdade(26)

console.log(Pessoa.nome)
console.log(Pessoa.idade)