


                                //[[OPERADORES ARITMETICOS]]

let a = 10;
let b = 15;

/*
console.log(a + b); // SUMA
console.log(a - b); // RESTA  
console.log(a * b); // PORCENTAJE
console.log(a / b); // DIVISION
console.log(a % b); // MODULO
console.log(a ** b); // EXPONENTE

a++ // INCREMENTO
console.log(a);

b-- // DECREMENTO
console.log(b);

*/

                                //[[ OPERADORES DE ASIGNACION]]

/*
let operadoresAsignacion = 2
console.log(operadoresAsignacion);

operadoresAsignacion += 2 // ====> Esto es igual hacer operadoresAsignacion = operadoresAsignacion + 2
console.log(`El valor ahora es de =  ${operadoresAsignacion}`);

operadoresAsignacion -= 2
operadoresAsignacion *= 2
operadoresAsignacion /= 2
operadoresAsignacion %= 2
operadoresAsignacion **= 2
*/


                                //[[OPERADORES DE COMPARACION]]

//> Mayor
//< Menor
//>= mayor que
//<= menor que
//== igual por valor
//=== igual por tipo y valor
//!= distinto de valor
//!== disinto de valor y tipo
//! not


//console.log(a > b);
//console.log(a < b);
//console.log(a >= b);
//console.log(a <= b);
//console.log(a == b);  //igual por valor
//console.log(a == 10); //igual por valor
//console.log(a == a); //igual por valor
//console.log(a == "10"); //igual por valor
//console.log(typeof(a));
//console.log(a === a);  // es igual a tipo y valor
//console.log(a === 10);  // es igual a tipo y valor
//console.log(a === "10");  // es igual a tipo y valor
//console.log(a != 10); // aca es cuando nos preguntamos a es DISTINTO A 10 
//console.log(a !== "10");// aca es cuando nos preguntamos a es DISTINTO a valor y topo a 10



                                 //[[[[OPERADORES LOGICOS]]]]

// && (and) Cuando se usa un operador de logica && quiere decir que algo "Y" otro cosa es deben coincidir. si una de las compraraciones no funciona directamente arroja falso
// || (or)  Cuando se usa un operador de logica || quiere decir que un valor "o" el otro valor pueden ser true. Aca si un valor ya es true, devuelve true, caso contrario con el &&

//console.log(5 > 10 && 10 > 11); // false
//console.log(5 < 10 && 10 < 11); // true
//console.log(5 > 10 && 10 > 11); // false 
//console.log(5 > 10 && 10 > 11 && 30 > 40); false

//console.log(5 > 10 || 10 > 11); //false
//console.log(5 < 10 || 10 < 11); //true
//console.log(5 > 10 || 10 < 11); //true
//console.log(5 > 10 || 10 < 11 || 30 > 40); //true
//console.log(5 > 10 && 10 < 11 || 30 < 40); //true en este caso da true porque la ultima compracion da positivo.


//not es para invertir el resultado
//console.log(!true); // ==> esto daria un false
//console.log(!false); // ==> esto daria un true
//console.log(!(5 > 10 && 11 > 20)); // true
//console.log(!(5 > 10 || 11 > 20)); // true


//                        [[[ OPERADORES TERNARIOS]]] ==> es una forma de "operadores de COMPARACION"

let velez = true
//velez ? (este simbolo marca que como un "true" )  : (este simbolo maraca como un "false")
velez ? console.log("es el mas grande del mundo ") : console.log("No es el mas grande del mundo");
//----------------->entra aca por que es true -----------------> aca no entra porque no es false

velez = false //otra forma de ponerlo es !true
velez ? console.log("es el mas grande del mundo ") : console.log("No es el mas grande del mundo");
//---------------->no entra aca por que es true ----------------->entra porque no es false