//PROMPT
let dato = prompt("Por favor escriba su nombre");
saludar("Hola, ¿como estás?");
saludar(dato);
despedir("Adios.")
cerrar("Programa terminado")

function saludar(p1){
	console.log(p1);
}
function despedir(p2){
	console.log(p2);
}
function cerrar(p3){
	console.log(p3);
}