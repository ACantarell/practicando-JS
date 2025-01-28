

//            [[[ARRYA]]]


let myArray = []  // -----> asi se declara un array, por dentro puede ir un conjunto de valores en una misma variable.

myArray = ["Amadeo", "Cantarell", 31, true]
console.log(myArray);

//Modificar el valor de una posicion del array

myArray[0] = "Jose" // ---> En este caso, en la posicion 0 estaba el valor "Amadeo" y fué modificado por "Jose"

console.log(myArray);

// Métodos comunes de Array

//      PUSH y POP

//Push ---->Introduce un valor nuevo al array, y lo agrega al final. En caso de estar vacío el array lo agrega al principio

myArray.push("Amadeo")
myArray.push("Velez")
myArray.push("Amalfitani")
myArray.push("Campeón")

console.log(myArray);


//Pop ----> Elimina el ultimo valor y lo devuelve.

myArray.pop()

let eliminado = myArray.pop()
//para ver el valor eliminado, lo podes meter en una variable
console.log(`El elemento eliminado de pop es: "${eliminado}"`);

console.log(myArray);


//      SHIFT y UNSHIFT

//Shift --> Elimina el PRIMER valor de un array

let eliminadoShift = myArray.shift()

console.log(`El elemento eliminado de shift es: "${eliminadoShift}"`);

//Unshift ---> Agregar al inicio un valor al array

myArray.unshift("PrimerValor")

console.log(myArray[0]);
console.log(myArray);



//      LENGTH

//Length ---> Devuelve el total de elementos dentro de un array
let longitud = myArray.length

console.log(longitud);



//      CLEAR

//Para eliminar los valores de un array se puede volver a inicializar el array vacio o utilizando length y pasarle como valor 0

myArray = [] //es el recomendable
let clearAlt = myArray.length = 0 //como aleternativa (no recomendada)

console.log(myArray);
console.log(clearAlt);



//        SLICE

// SLICE ---> Lo que hace es tomar un fragmento del array, que le pasemos como paramentros. 
myArray.push("Amadeo", "Cantarell", 31, true, "Velez", "Amalfitani")
let mySlice = myArray.slice(4, 6)  // ---> lo que hace es tomar en cuenta el primer parametro y el segundo corta, sin tenerlo en cuenta.
console.log(mySlice);



//        Splice

// Splice ---> Elimina los elementos que le paemos como parameto. El primer parametro es donde me paro en el array y el segundo parametro la cantidad de elementos que voy a borrar.

myArray = ["Amadeo", "Cantarell", 31, true, "Velez", "Amalfitani"]

let mySplice = myArray.splice(2,3)
console.log(`Los elementos borrados por splice son: "${mySplice}"`);

console.log(myArray);




//      MAP

// Map ---> Es una coleccion de elemntos.

myArray = ["Amadeo", "Cantarell", "Velez", "Amalfitani"]

let upperNombre = myArray.map(elemento => elemento.toUpperCase())
console.log(upperNombre);


let personas = [
    { nombre: "Amadeo", edad: 31, profesion: "Desarrollador" },
    { nombre: "Cantarell", edad: 28, profesion: "Diseñador" },
    { nombre: "Velez", edad: 35, profesion: "Analista" },
    { nombre: "Amalfitani", edad: 29, profesion: "QA Tester" }
  ];

let mapeoDePersonas = personas.map(elemento => elemento.edad).map(elemento => elemento * 2) // se puede agregar mas de un mapeo por variable.
let multiplicarEdad = mapeoDePersonas.map(elemento => elemento * 2)

console.log(mapeoDePersonas);
