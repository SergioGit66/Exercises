//Conditionals

// Las condiciones se pueden implementar de las siguientes maneras:

// if
// if (condition) {
//     la parte que se ejecuta cuando es true
// }

// let num = 3;
// if (num > 0) {
//     console.log(`${num} es mi número`);
// }

// let isRaining = true;
// if (isRaining) {
//     console.log("pilla paraguas");
// }

// if else
/* let isRaining = true;
if (!isRaining) {
    console.log("pilla paraguas");
} else {
    console.log("disfrutas del sol");
}

// if else if else
let a = 3;
if (a > 0) {
    console.log("es un número positivo");
} else if (a < 0) {
    console.log("es un número negativo");
} else if (a == 0) {
    console.log("es cero");
} else {
    console.log("no es un número");
}
 */
// switch
//let weather = "rainy";
//switch (weather) {
 /*    case "rainy":
        console.log("esta lloviendo");
        break;
    case "cloudy":
        console.log("no hay luz");
        break;
    case "sunny":
        console.log("hace calor");
        break;
    default:
        console.log("mejor me quedo en casa");
        break;
} */

//ejemplo con pregunta:
// let dayUserInput = prompt("¿Qué día es hoy?");
// let day = dayUserInput.toLowerCase();

// switch (day) {
//     case "lunes":
//         console.log("Hoy es Lunes");
//         break;
//     case "martes":
//         console.log("Hoy es Martes");
//         break;
//     case "miércoles":
//         console.log("Hoy es Miércoles");
//         break;
//     case "jueves":
//         console.log("Hoy es Jueves");
//         break;
//     case "viernes":
//         console.log("Hoy es Viernes");
//         break;
//     case "sábado":
//         console.log("Hoy es Sábado");
//         break;
//     case "domingo":
//         console.log("Hoy es Domingo");
//         break;
//     default:
//         console.log("No es un día de semana.");
// }

// let num = prompt("Ingrese un número");
// switch (true) {
//   case num > 0:
//     console.log("El número es positivo");
//     break;
//   case num == 0:
//     console.log("El número es cero");
//     break;
//   case num < 0:
//     console.log("El número es negativo");
//     break;
//   default:
//     console.log("El valor ingresado no era un número");
// }

// operador ternario ES6

//let isCodeWaring = true;

//!isCodeWaring ? console.log("estas practicando katas") : console.log("eres un vago");

        // ================================================
        // ejemplo de transformación en ternario (de momento no os compliqueis la vida)
        //  year = "senior";
        // if (credits < 30) {
        //   year = "freshman";
        // } else if (credits <= 59) {
        //   year = "sophomore";
        // } else if (credits <= 89) {
        //   year = "junior";
        // }

        // year = credits < 30 ? "freshman" : credits <= 59 ? "sophomore" : credits <= 89 ? "junior" : "senior";
        // ================================================
//================================================================================================




//Ejercicio 1

/* let userAge = prompt("Ingrese su edad")
    agediff = Math.abs(userAge - 18 );

if (userAge >= 18) {

    console.log("Tienes la edad suficiente para conducir");

} else{

    console.log(`Te faltan ${agediff} para conducir`);
} */

//Ejercicio 2

/* let myAge = 28
    youAge = prompt( "Ingrese su edad" )
    aggdiff2 = Math.abs(myAge - youAge);

if (myAge > youAge) {

    console.log(`Soy ${aggdiff2} mayor que tú`)

} else {
    console.log(`Eres ${aggdiff2} mayor que yo `)
    
} */

//Ejercicio 3

/* let  a = 2,
     b = 3;

if (a > b) {
    console.log("a es mayor que b");
} else {
    console.log("a es menor que b");
}

a > b
? console.log("a es mayor que b") : console.log("a es menor que b"); */

//Ejercicio 4

/* let num = prompt("Ingresa un numero")
if (num % 2==0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
    
} */

//NIVEL 2

let grade = prompt("Insert your grade");


switch (true) {
    case grade >= 80 && 100 >= grade:
        console.log("A");
    case grade >= 80 && 89 < grade:
        console.log("B");
        break;

    default:
        break;
}
