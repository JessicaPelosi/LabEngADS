var data = new Date();

var dataFormatada = data.toLocaleDateString('pt-BR', {
 weekday: 'long',
 year: 'numeric',
 month: 'long',
 day: 'numeric'
});

var elementoData = document.getElementById("data");
elementoData.textContent = dataFormatada.toUpperCase();