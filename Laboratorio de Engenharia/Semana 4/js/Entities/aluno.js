class Aluno extends Pessoa{
    static contador = 0;
    constructor(nome, email, datNasc, telCel, telFixo, matricula, curso){
        Aluno.contador++;
        super(nome, email, datNasc, telCel, telFixo, matricula)
        this.curso = curso;

        this.setCurso = function(curso){
            this.curso = curso;
        }
        this.getCurso = function(){
            return this.curso;
        }
    }
}