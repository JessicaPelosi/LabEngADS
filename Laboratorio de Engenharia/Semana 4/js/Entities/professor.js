class Professor extends Pessoa{
    static contador = 0;
    constructor(nome, email, datNasc, telCel, telFixo, matricula, area, lattes){
        Professor.contador++;
        super(nome, email, datNasc, telCel, telFixo, matricula)
        this.area = area;
        this.lattes = lattes;

        //area
        this.setArea = function(area){
            this.area = area;
        }
        this.getArea = function(){
            return this.area;
        }
        //lattes
        this.setLattes = function(lattes){
            this.lattes = lattes;
        }
        this.getLattes = function(){
            return this.lattes;
        }
    }
}