var multiplicador = prompt("Qual tabuada você quer?")
var limite = prompt("Até que número você quer que vá?")
var count = 0
document.write("<h3>Caso queira uma outra tabuada, aperte f5 no teclado. Caso esteja em notebook, segure a tecla Fn e depois aperte f5.</h3>")
while(count <= limite){
    var resultado = multiplicador * count; 
    document.write(multiplicador + " x " + count + " = " + resultado + "<br>")
    count ++
}