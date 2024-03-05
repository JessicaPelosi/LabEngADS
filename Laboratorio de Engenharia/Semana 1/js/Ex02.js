let numero = prompt("Insira um número inteiro positivo:","");
function ePrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
        return false;}
    }
return true;
}
if(ePrimo(numero)){
    alert("O número " + numero + " é primo.");
} else {
    alert("O número "+numero+" não é primo.");}   
