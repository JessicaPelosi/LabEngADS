let numero = prompt("Digite um número positivo: ","");

function fatorial(numero) {
let fatorial = 1;
for (let i = numero; i > 1; i--) {
    fatorial *= i;
}
return fatorial;
}

if(numero > 0){
    alert("O fatorial de " + numero + " é igual a "+ fatorial(numero));
} else {
    alert("Esse número é inválido!");
}