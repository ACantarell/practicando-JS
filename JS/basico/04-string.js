


                    //[[[[STRING]]]]




let nombre = "Amadeo"
let apellido = "Cantarell"
let edad = 31
let saludo = "Hola, " + nombre + " " + apellido + " como estas?"
let concatenar = `Hola, aca estoy concatenando la vaiable ${nombre} con la otra variable ${apellido}`
console.log(concatenar);


//Concatenar cadenas de texto
console.log(nombre + apellido + edad);

 //longitud de cadena de texto 
console.log(saludo.length); // saca la longitud de la cadena de texto que le pasas. En este caso es de 34.
console.log(nombre.length); // saca la longitud de la cadena de texto que le pasas. En este caso es de 6.
 
//Acceso a caracteres
console.log(apellido[2]);// esto es para accesder al valor del indice que tiene ese valor. En este caso es la letra "n"
console.log(apellido[5]);// esto es para accesder al valor del indice que tiene ese valor. En este caso es la letra "r"
console.log(apellido[15]);// En este caso, como el indice que se le pasa no existe en la cadena te arroja un undefined

//Metodos Comunes
console.log(saludo.toLowerCase()); // toda la cadena de texto lo transforma en miniscula
console.log("---------");
console.log(saludo.toUpperCase()); // toda la cadena de texto lo transforma en mayuscula
console.log("---------");
console.log(saludo.indexOf("como estas?"));// devuelve el indice donde empieza la palabra que le pasamos como parametro -> en este caso 23
console.log(saludo.indexOf("Amadeo")); //devuelve el indice donde empieza la palabra que le pasamos como parametro -> en este caso 6
console.log("---------");
console.log(saludo.includes("Amadeo")); // comprueba si existe
console.log("---------");
console.log(saludo.slice(0, 3)); // devuelve la porcion que le pasas como parametro (indices). y el ultimo parametro no lo incluye -> Hol
console.log(saludo.slice(0, 10)); // devuelve la porcion que le pasas como parametro (indices). y el ultimo parametro no lo incluye -> Hola, Amad
console.log("---------");
console.log(saludo.replace("Amadeo", "Osvaldo")); // lo que hace esta funcion es remplazar una palabra, por otra que encuentre
