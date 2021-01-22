//ENERO 21 DE 2021 (DESPUES DEL REPASO)
//FUNCIONES
function saludar(){
	return "Hola mundo ¿cómo estás?"; // debe ser última línea de Fx
}

console.log(saludar())

//Variables locales y globales
var informacion="Miguel";          //Variable de entorno global
var informacion2="Andrea";         //Variable de entorno local
nombre="Diana";                    //Variable anónima

console.log(informacion);          //Debe imprimir 'Miguel'
console.log(informacion2);         //Debe imprimir 'Andrea'

function comparacion(){
	var informacion="Angel"        //entorno local, solo dentro de la Fx
	                               //Debe imprimir "Angel"
	console.log(informacion);      //
}

comparacion();
console.log(informacion);

//Constantes
const informacion3 = "Pedro";
console.log(informacion3);
//const informacion3 = "Ustele"    //Genera error porque no se puede modificar
							       //Se podría modificar si es lista u objeto
const informacion4 = {name:"Juan"}
console.log(informacion4.name);    //Debe imprimir Juan
informacion4.id = 2                //Agrego otro dato al objeto
console.log(informacion4);         //Imprimo todo el objeto en la consola
