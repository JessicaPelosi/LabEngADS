class Pessoa{
    static contador = 0;
    constructor(nome, email, datNasc, telCel, telFixo, matricula){
        Pessoa.contador++;
        this.nome = nome;
        this.email = email;
        this.dataNasc = datNasc;
        this.telFixo = telFixo;
        this.telCel = telCel;
        this.matricula = matricula;
    
        // Setters and  Getters
        //nome
        this.setNome = function(nome){
            this.nome = nome;
        }
        this.getNome = function(){
            return this.nome;
        }
        //email
        this.setEmail = function (email) {
            this.email = email;
        }
        this.getEmail = function() {
            return this.email;
        }
        //data nascimento
        this.setDataNasc = function(dataNasc){
            this.dataNasc = dataNasc;
        }
        this.getDataNasc = function(){
            return this.dataNasc;
        }
        //telefone fixo
        this.setTelFixo = function(telFixo){
            this.telFixo = telFixo;
        }
        this.getTelFixo = function(){
            return this.telFixo;
        }
        //telefone celular
        this.setTelCel = function(telCel){
            this.telCel = telCel;
        }
        this.getTelCel = function(){
            return this.telCel;
        }
        //matricula
        this.setMatricula = function(matricula){
            this.matricula = matricula;
        }
        this.getMatricula = function(){
            return this.matricula;
        }

    }
}