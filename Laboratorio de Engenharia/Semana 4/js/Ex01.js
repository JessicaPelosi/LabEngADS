let value = prompt("Informe um dado:","");
if(confirm("Deseja verificar o tipo do dado informado?")){
    if(value == "true" || value == "True" || value == "False" || value == "false"){
        document.write("<h1> O tipo do seu dado é booleano.</h1>")
    } else if(!isNaN(value)){
        document.write("<h1> O tipo do seu dado é um número.</h1>");
    } else {
        document.write("<h1> O tipo do seu dado é uma string.</h1>");}
} else {
    document.write("<h1> Obrigado por visitar esta página!</h1>")
}