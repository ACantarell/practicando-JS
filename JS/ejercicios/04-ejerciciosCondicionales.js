// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Amadeo"
let comprobarNombre = nombre == "Amadeo" ? `Tu nombre es correcto` : `Tu nombre no es correcto`
console.log(comprobarNombre);


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

const usuario = "pichincha"
const pass = 123123

if (usuario == "pichincha" && pass == 123123) {
    console.log("Usuario y contraseña son correctas");
    
}else{
    console.log("le erraste en algo capo");
    
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -3
if (numero > 0) {
    console.log("tu numero es positivo") 
} else if (numero == 0){
    console.log("tu numero es 0");
}else{
    console.log("tu numero es negativo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadParaVotar = Math.floor(Math.random() * 101)

if (edadParaVotar >= 18) {
    console.log("podes vortar, capo");
}else{
    let edadRestante = 18 - edadParaVotar
    console.log(`sos menor de edad, y te falta: ${edadRestante}` );
    
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad = 1
edad >= 18 ? console.log("sos mayor de edad") : console.log("sos menor de edad");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 7

if (mes >= 0 && mes <= 3) {
    console.log("es verano");
}else if(mes >= 4 && mes <= 6) {
    console.log("es otonio");    
}else if(mes >= 7 && mes<= 9){
    console.log("es invierno");
}else if (mes >= 10 && mes<= 12){
    console.log("es primavera");   
}else{
    console.log("no existe");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior (switch)
let calendario = 43

switch (calendario) {
    case 1:
        console.log("Este mes tiene 30 dias");
        
        break;
    case 2:
        console.log("Este mes tiene 28 dias");
        
        break;
    case 3:
        console.log("Este mes tiene 32 dias");
        
        break;
    case 4:
        console.log("Este mes tiene 31 dias");
        
        break;
    case 5:
        console.log("Este mes tiene 33 dias");
        
        break;
    case 6:
        console.log("Este mes tiene 34 dias");
        
        break;
    case 7:
        console.log("Este mes tiene 36 dias");
        
        break;
    case 8:
        console.log("Este mes tiene 3 dias");
        
        break;
    case 9:
        console.log("Este mes tiene 23 dias");
        
        break;
    case 10:
        console.log("Este mes tiene 12 dias");
        
        break;
    case 11:
        console.log("Este mes tiene 52 dias");
        
        break;
    case 12:
        console.log("Este mes tiene 4 dias");
        
        break;

    default:
        console.log("No esta en el calendario");
        
        break;
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let saludo = 1

switch (saludo) {
    case 1:
        console.log("ciao");
        break;
    case 2: 
        console.log("hi");
        break;
    case 3:
        console.log("hola");
        break;
    case 4:
        console.log("#$=>chino");
        break;
    case 5:
        console.log("aqweasdswqehgjsad => aleman");
        break;  

    default:
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mesCalendario = 3
switch (mesCalendario) {
    case 1:
        console.log("Enero");
        
        break;
    case 2:
        console.log("Febrero");
        
        break;
    case 3:
        console.log("Marzo");
        
        break;
    case 4:
        console.log("Abril");
        
        break;
    case 5:
        console.log("Mayo");
        
        break;
    case 6:
        console.log("Junio");
        
        break;
    case 7:
        console.log("Julio");
        
        break;
    case 8:
        console.log("Agosto");
        
        break;
    case 9:
        console.log("Septiembre");
        
        break;
    case 10:
        console.log("Octubre");
        
        break;
    case 11:
        console.log("Noviembre");
        
        break;
    case 12:
        console.log("Diciembre");
        
        break;

    default:
        console.log("No esta en el calendario");
        
        break;
}



// 10. Usa un switch para hacer de nuevo el ejercicio 7

