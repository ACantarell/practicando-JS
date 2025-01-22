// 1. Concatena dos cadenas de texto

// 2. Muestra la longitud de una cadena de texto

// 3. Muestra el primer y último carácter de un string

// 4. Convierte a mayúsculas y minúsculas un string

// 5. Crea una cadena de texto en varias líneas

// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales

// 10. Comprueba si dos strings tienen la misma longitud


let nombre = "Amadeo"
let apellido = "Cantarell"

// 1. Concatena dos cadenas de texto
/*
console.log(`Hola estoy concatenando ${nombre} con ${apellido}`);
console.log("Hola estoy concatenando " + "Amadeo" + " con " + "Cantarell");
console.log("Hola estoy concatenando " + nombre + " con " + apellido);
*/


// 2. Muestra la longitud de una cadena de texto
/*
console.log(nombre.length);
*/


// 3. Muestra el primer y último carácter de un string
/*
console.log(apellido.length);

console.log(apellido[0]);
console.log(apellido[8]);
*/


// 4. Convierte a mayúsculas y minúsculas un string
/*
console.log(apellido.toUpperCase());
console.log(nombre.toLowerCase());
*/


// 5. Crea una cadena de texto en varias líneas
/*
let variasLineas = `Hola
esto es un
salto de linea
con las 
templateliteal o algo asi`
console.log(variasLineas);
*/

// 6. Interpola el valor de una variable en un string
/*
console.log(nombre);
console.log(nombre.replace("Amadeo", "Matias"));
*/


// 7. Reemplaza todos los espacios en blanco de un string por guiones
/*
let espacios = "A m a d e o"
console.log(espacios);
console.log(espacios.replaceAll(" ", "-"))
*/

// 8. Comprueba si una cadena de texto contiene una palabra concreta
/*
let buscar = nombre.concat(apellido)

console.log(buscar.indexOf("Ca"));
*/

// 9. Comprueba si dos strings son iguales
/*
console.log(nombre === apellido);
*/


// 10. Comprueba si dos strings tienen la misma longitud

/*
console.log(nombre.length == apellido.length);
console.log(nombre.length == nombre.length);
*/