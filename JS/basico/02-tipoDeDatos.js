

//Tipos de datos


//[[[Datos Primitivos]]] --> Representan un solo valor, basicos e inmutables


//STRING (Cadena de texto)
const nombre = "Amadeo Jose"
const apellido = 'Cantarell'
let mail = `asdasdasd@gmail.com`

//NUMBER
let edad = 32 // numero entero
let altura = 1.75 // numero decimal
let peso = 85

//Boolean (boleanos)
let verdadero = true;
let falso = false;

//Undefined
let undefined
console.log(undefined);

//Null
let nullValue = null

//Symbol
let simbol = Symbol("mySimbol")

//BigInt
let granEntero =  BigInt(1231231232131232131232132112321312312654645)
let granEntero2 = 1231231232131231231232131239435982378923749823744238n

//Mostramos los tipos de datos
console.log(`El tipo de dato es ` + typeof nombre);
console.log(`El tipo de dato es ` + typeof edad)
console.log(`El tipo de dato es ` + typeof verdadero)
console.log(`El tipo de dato es ` + typeof undefined)
console.log(`El tipo de dato es ` + typeof nullValue)
console.log(`El tipo de dato es ` + typeof simbol)
console.log(`El tipo de dato es ` + typeof granEntero)