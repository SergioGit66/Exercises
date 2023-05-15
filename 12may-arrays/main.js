/* // Arrays
    //array vacio
    let arr = [];
    console.log(arr);

    //array con valores
    let fruitsAndNumbers = ["banana", 5, "pear", "apple", 6, "lemon"];
    console.log(fruitsAndNumbers.length);

    //generar array con split
    let numg = "gamma";
    console.log(numg.split(""));

//acceder a los elementos del array
let fruits = ["banana", "pear", "apple", "lemon"];
console.log(fruits[0]);

let lastPosition = fruits.length-1; //3
console.log(fruits[lastPosition]);

//modificar elementos de un array
let numbers = [1,2,3,4,5];
numbers[0] = 10;
console.log(numbers);


const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
countries[3] ="Spain";
console.log(countries);

//métodos para manipular los arrays

  //constructor de arrays
  const arrayz = Array(8);
  console.log(arrayz);

  //creando valores estáticos
  console.log(arrayz.fill("x"));
  
  const fillUp = Array(4).fill("Pedro");
  console.log(fillUp);

  //concatenación de arrays
  let numgg = [44,28,5,6,7];
  let enterprise = ["gamma", "tech"];

  let concatArrays = numgg.concat(enterprise);
  console.log(concatArrays);

  //obtener la longitud de un array
  let lengthConcat = concatArrays.length;
  console.log(lengthConcat);

  //obtener el index de un elemento de un array
  console.log(concatArrays.indexOf(6));
    //ejemplo de usos
    let index = fruits.indexOf("pear"); //0
    if (index === -1) {
        console.log("No lo encuentro");
    } else {
        console.log("Si está en el array");
    }

    //obtener el último index de un elemento en un array
    let supernumbers = [1,2,3,1,5,4,1,4];
    console.log(`supernumbers= ${supernumbers}`);
    let showlastindex = supernumbers.lastIndexOf(1);
    console.log(showlastindex);

    //verificar si un elemento existe en un array
    console.log(supernumbers.includes(3));

    //comprobar un array
    console.log(Array.isArray(supernumbers));

    //convertir un array a string
    let convertToStr = supernumbers.toString();
    console.log(convertToStr);

    //unir los elementos de un array
    console.log(supernumbers.join(""));

    // cortar/copiar elementos de un array

    //slice
    let copyArr = supernumbers.slice(3,supernumbers.length);
    console.log(copyArr);

    //splice(posición inicial, 
        // número de elementos a eliminar y 
        // cantidad de elementos que se agregarán)
            supernumbers.splice(2,1);
            console.log(supernumbers);

            const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
            // At position 2, add 2 elements: 
            fruitsss.splice(2, 2, "Lemon", "Kiwi");
            console.log(fruitsss);

            let months = ["January", "February", "Monday", "Tuesday"];
            let days = months.splice(2);
            console.log(days); // ["Monday", "Tuesday"]
            console.log(months);

    //añadir elementos a un array
    const arry = ["item1", "item2", "item3"];
    arry.push("new item"); //añade el elemento al final
    console.log(arry);

    //eliminar último elemento
    arry.pop();
    console.log(arry);

    //eliminar un elemento al comienzo
    arry.shift();
    console.log(arry);

    //añadir un elmento al inicio
    arry.unshift("item0");
    console.log(arry);

    //invertir orden del array
    arry.reverse();
    console.log(arry);

    //ordenar elementos en un array
    arry.sort();
    console.log(arry);


    const webTechs = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "MongoDB",
      ];
      console.log(webTechs);

      webTechs.sort().reverse();
      console.log(webTechs);

//Array de arrays

let arrayOfArray = [
    [1,2,3],
    [4,5,6]
];

console.log(arrayOfArray[0][1]);

 */

/* ================================================================================== */
/* import { countries } from "./countries";

import { webTechs } from "./webTechs";

console.log(countries);
console.log(webTechs); */




//Ejercicio 1

let arr = [];

console.log(arr);

//Ejercicio 1.2
let anotherarray = [1, 2, 3, 4, 5];
console.log(anotherarray);

//Ejercicio 1.3

console.log(anotherarray.length);

//Ejercicio 1.4

console.log(anotherarray[0]); //primero

let lastPosition = anotherarray.length - 1; //ultimo
console.log(anotherarray[lastPosition]);

let anotherarray1 = anotherarray[Math.floor(anotherarray.length / 2)]; //medio
console.log(anotherarray1);

//Ejercicio 1.5

let mixedDataTypes = ["duck", 1, "dog", 2, []];
console.log(mixedDataTypes);

//Ejercicio 1.6

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//Ejercicio 1.7

console.log(itCompanies);

//Ejercicios 1.8

console.log(itCompanies.length);

//Ejercicios 1.9 
console.log(itCompanies[0]); //primero

let itCompanieslenght = itCompanies.length - 1;
console.log(itCompanies[itCompanieslenght]); //ultimo

let itCompaniesnew = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(itCompaniesnew);

//Ejercicios 1.10 

console.log(itCompanies[0], [1], [2], [3], [4], [5], [6]);
console.log(itCompanies);

//Ejercicios 1.11 

itCompanies[0] = "FACEBOOK";
itCompanies[1] = "GOOGLE";
itCompanies[2] = "MICROSOFT";
itCompanies[3] = "APPLE";
itCompanies[4] = "IBM";
itCompanies[5] = "ORACLE";
itCompanies[6] = "AMAZON";
console.log(itCompanies);

//Ejercicio 1.12 

console.log(`${itCompanies[0]},${itCompanies[1]},${itCompanies[2]},${itCompanies[3]},${itCompanies[4]},${itCompanies[5]} y ${itCompanies[6]}, son grandes empresas de TI.`);

//Ejercicio 1.13 


//Ejercicio 1.14

console.log(itCompanies.includes("o"));

//Ejercicio 1.15

itCompanies.sort();
console.log(itCompanies);

//Ejercicio 1.16

itCompanies.sort().reverse();
console.log(itCompanies);

//Ejercicio 1.17

let copyFirstitCompanies = itCompanies.slice(0, 3);
console.log(copyFirstitCompanies);

//Ejercicio 1.18

let copyLastitCompanies = itCompanies.slice(4, 7);
console.log(copyLastitCompanies);

//Ejercicio 1.19

let copymiddleitCompanies = itCompanies.slice(3, 4);
console.log(copymiddleitCompanies);

//Ejercicio 1.20

itCompanies.shift()
console.log(itCompanies);

//Ejercicio 1.21

itCompanies.splice(3, 5)
console.log(itCompanies);

//Ejercicio 1.22 


//Ejercicio 1.23



//Ejercicio 2.1

//Ejercicio 2.2
let text = "I love teaching and empowering people. I teach HTML,CSS,JS, React,Python.";  
let newText = text.split("," , " . ");
console.log(newText);

let newTextarray = Array(newText);
console.log(newTextarray);

//Ejercicio 2.3 (List)

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice (2,3);
shoppingCart.splice(4,2, "Green Tea")
console.log(shoppingCart);

//Ejercicio 2.4 (Ethiopia)

//Ejercicio 2.5 (WebTechs)

//Ejercicio 2.6

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];

const backEnd = ["Node", "Express", "MongoDB"];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Ejercicio 3.1

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort();
console.log(ages);