function inicializarContador() {
    const contadorDiv = document.getElementById('contador');
    contadorDiv.innerHTML = `
        
        <h3>Contador de Pessoas</h3>
         
        <a onClick="window.location.reload()"> 
        <img src="img/r.png" style="position: absolute; right: 0; margin-right: 20px; height: 30px; width: auto;"> 
        </a>

        <h2> <b> Total </h2> <br>
        <span id="total" style="border: solid; border-radius: 6px; padding: 10px 40px"> 0 </span> <br><br>

        <div style="position: absolute; left: 0; margin-left: 20px">
            <img src="img/man.png" width="150" height="150" > 
            <p> Homens </p> <br>
            <span id="homens" style="border: solid; border-radius: 6px; padding: 10px 40px"> 0 </span> <br> <br>
            <a onClick="adicionarHomem()"> <img src="img/plus.png"> </a>
            <a onClick="subtrairHomem()"> <img src="img/minus.png"> </a>
        </div>

        <div style="position: absolute; right: 0; margin-right: 20px">    
            <img src="img/woman.png" width="150" height="150" >        
            <p> Mulheres </p> <br>
            <span id="mulheres" style="border: solid; border-radius: 6px; padding: 10px 40px"> 0 </span> <br><br>
            <a onClick="adicionarMulher()"> <img src="img/plus.png"> </a>
            <a onClick="subtrairMulher()"> <img src="img/minus.png"> </a>
        </div> 
    `;
}


// Funções para adicionar e subtrair homens e mulheres
function adicionarHomem() {
    const homens = document.getElementById('homens');
    homens.textContent = parseInt(homens.textContent) + 1;
    atualizarTotal();
}

function adicionarMulher() {
    const mulheres = document.getElementById('mulheres');
    mulheres.textContent = parseInt(mulheres.textContent) + 1;
    atualizarTotal();
}

function subtrairHomem() {
    const homens = document.getElementById('homens');
    if (parseInt(homens.textContent) > 0) {
        homens.textContent = parseInt(homens.textContent) - 1;
    }
    atualizarTotal();
}

function subtrairMulher() {
    const mulheres = document.getElementById('mulheres');
    if (parseInt(mulheres.textContent) > 0) {
        mulheres.textContent = parseInt(mulheres.textContent) - 1;
    }
    atualizarTotal();
}

// Função para atualizar o total
function atualizarTotal() {
    const homens = document.getElementById('homens');
    const mulheres = document.getElementById('mulheres');
    const total = document.getElementById('total');
    total.textContent = parseInt(homens.textContent) + parseInt(mulheres.textContent);
}

// Inicializar o contador quando a página for carregada
document.addEventListener('DOMContentLoaded', inicializarContador);
