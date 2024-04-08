var btn = document.querySelectorAll(".key li"),
    input = document.querySelector(".input-valor"),
    operador = document.querySelectorAll(".operador");

function adicionarValor(valor) {
    input.innerHTML += valor;
}

function limparInput() {
    input.innerHTML = "";
}

function calcularExpressao() {
    var equacao = input.innerHTML;
    if(equacao){
        try {
            input.innerHTML = eval(equacao);
        } catch (e) {
            alert('Erro na expressão');
        } 
    }
}
function calcularRaizQuadrada() {
    var valor = parseFloat(input.innerHTML);}

document.addEventListener('keydown', function(event) {
    var key = event.key;
    switch (key) {
        case "0": case "1": case "2": case "3": case "4":
        case "5": case "6": case "7": case "8": case "9":
            adicionarValor(key);
            break;
        case "*":
            adicionarValor("*");
            break;
        case "+":
            adicionarValor("+");
            break;
        case "-":
            adicionarValor("-");
            break;
        case ".":
            adicionarValor(".");
            break;
        case "/":
            adicionarValor("/");
            break;
        case "Enter":
        case "=":
            calcularExpressao();
            break;
        case "c":
        case "C":
            limparInput();
            break;
        default:
            break;
    }
});

for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        var btnVal = this.innerHTML;
        switch (btnVal){
            case "c":
            case "C":
                limparInput();
                break;
            case "=":
                calcularExpressao();
                break;
            default:
                adicionarValor(btnVal);
                break;    
        }
    });
}
