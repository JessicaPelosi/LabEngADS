document.getElementById('formPalindromo').addEventListener('submit', function(event) {
    event.preventDefault();

    var texto = document.getElementById('texto').value;
    var textoNormalizado = texto.replace(/\s/g, '').toLowerCase();
    var palindromo = textoNormalizado === textoNormalizado.split('').reverse().join('');

    if (palindromo) {
        alert('O texto é um palíndromo!');
    } else {
        alert('O texto não é um palíndromo!');
    }
});