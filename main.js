//PROMPT - OPCION 1
let dato = prompt("Por favor escriba su nombre");
console.log("OPCION 1")
saludar("Hola, ¿como estás, " +dato+ "?");
despedir("Adios " + dato + ".")
cerrar("Programa terminado.")

function saludar(p1){
	console.log(p1);
}
function despedir(p2){
	console.log(p2);
}
function cerrar(p3){
	console.log(p3);
}
