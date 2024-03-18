function relogio(){

    var hora = new Date();

    var horaFormatada = hora.toLocaleTimeString('pt-BR');

    var elementoHora = document.getElementById("hora");
    elementoHora.textContent = horaFormatada;

    setTimeout(relogio, 1000);
}

relogio();