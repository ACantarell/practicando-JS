//      [[[[IF, ELSE IF, ELSE]]]]

// if (si) --> para ejecutar un bloque de codigo si es verdadero

let edad = 35;

if (edad == 32) {
  console.log("Se ejecuta if, ya que la edad es igual a 32");
}

//else (sino) -> se ejecuta cuando la condiciones if no se ejecuta.
if (edad == 32) {
  console.log("Se ejecuta if, ya que la edad es igual a 32");
} else if (edad < 40) {
  console.log("Es menor a 40");
} else {
  console.log("Es mayor de edad");
}

//          [[[Operadores Ternarios]]]

edad == 35 ? "tengo 35 años" : "No tengo 35 años";

//Si queremos meter el resultado en una variable, lo podemos hacer de la siguiente forma

let resultadoEdad = edad == 35 ? "tengo 35 años" : "No tengo 35 años";
console.log(resultadoEdad);

//          [[[SWICH]]]

let dia = Math.floor(Math.random() * 6) + 1;
let NombreDia;

switch (dia) {
  case 0:
    NombreDia = "Domingo";
    break;
  case 1:
    NombreDia = "Lunes";
    break;
  case 2:
    NombreDia = "Martes";
    break;
  case 3:
    NombreDia = "Miercoles";
    break;
  case 4:
    NombreDia = "Jueves";
    break;
  case 5:
    NombreDia = "Viernes";
    break;
  case 6:
    NombreDia = "Sabado";
    break;

  default:
    break;
}

console.log(NombreDia);

