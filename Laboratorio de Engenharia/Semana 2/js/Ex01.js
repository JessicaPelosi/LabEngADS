var Valores = new Array();
function addValor(valor) {   
    if(valor !== null && valor !== " "){
        Valores.push(valor);
        Valores.sort();      
    } else {
        alert("Valor inválido!");
    }
    verValor(Valores);
    console.log(Valores); 
}

function verValor(Valores) {
    const lista = document.getElementById('Valores');
    lista.innerHTML = ''; // Limpa a lista
    Valores.forEach(valor => {
        const li = document.createElement('li');
        li.textContent = valor;
        lista.appendChild(li);
    });
}

document.getElementById('formValores').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const valor = document.getElementById('valor').value;
    if (valor) {
        addValor(valor);
        document.getElementById('valor').value = '';
    }
});