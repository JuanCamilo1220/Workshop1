// Seccion 1

alert("¡Bienvenido  al taller de JavaScript!");

// Seccion 2

// Dentro de este archivo se realizaran ejercicios para demostrar el entendimiento y uso de las variables de JavaScript

/**
 * Ejercicio 5: Declara una variable llamada miNumero y asígnale el valor 10. Usa console.log para imprimir tu variable en la consola.
 * 
 * Ejercicio 6: Crea una variable llamada miBooleano con el valor true. Imprime el tipo de dato usando typeof en un console.log.
 * 
 * Ejercicio 7: Crea una variable llamada miCadena y asígnale un valor de tu elección. Imprime la longitud de la cadena en la consola.
 * 
 * Ejercicio 8: Crea una variable llamada miArray y asígnale un array con 3 elementos de tu elección, estos elementos deben ser string, number y array. Imprime el array en la consola.
 *
 * Ejercicio 9: Crea una variable llamada miObjeto y asígnale un objeto con 3 propiedades de tu elección. Imprime el objeto en la consola.
 *
 */
// Seccion 3

/** Ejercicio 10: Utiliza prompt para pedirle al usuario su nombre y almacénalo en una variable llamada nombreUsuario. Usa alert para mostrar un saludo que incluya el nombre del usuario.
 * 
 * Ejercicio 11: Crea una confirmación con confirm que pregunte al usuario si le gusta JavaScript. Guarda la respuesta en una variable y muestra en consola un mensaje acorde a la respuesta
 */

// Seccion 4

/**
 * Ejercicio 9: Escribe un mensaje de advertencia usando console.warn con el texto "Esto es solo una práctica".

 *Ejercicio 10: Genera un mensaje de error utilizando console.error para simular un fallo al intentar ejecutar una operación.

 *Ejercicio 11: Crea una tabla en la consola a partir de un array con los números del 1 al 5 utilizando console.table
 */



const miNumero = 10;
console.log(miNumero);

const miBooleano = true;
console.log(typeof (miBooleano));

const miCadena = "Buenos dias";
console.log(miCadena.length);

const miArray = ["juan", 22, [12, 25, "Camilo"]];
console.log(miArray);

const miObjeto = {
    nombre : "juan",
    edad : 18,
    correo : "juan@gmail.com",
}
console.log(miObjeto)

let nombreUsuario = prompt("¿Cual es tu nombre?");

alert (`Saludos, ${nombreUsuario}`)

let respuesta = confirm("¿Te gusta JavaScript?")

console.log(respuesta)

console.warn("Esto es solo una practica")

console.error

console.table([1,2,3,4,5])