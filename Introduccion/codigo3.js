// ******* ARREGLOS - ARRAYS ********

// !CLASE 1

// frutas = ["banana", "manzana", "pera", 5, 9, "pedro"]

// document.write(frutas[4]);


// !CLASE 2

// let pc1 = {
//     nombre : "DaltoPC",
//     procesador: "Intel Core I7",
//     ram: "16GB",
//     espacio: "1TB"
// };

// let pc2 = ["DaltoPC","Intel Core I7","16GB","1TB"]

// document.write(pc1["nombre"])  --- primera forma
// ***********

// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let espacio = pc1["espacio"];

// frase = `el nombre de mi PC es: " <b>${nombre}</b> <br>
//          el procesador de mi PC es: <b>${procesador}</b> <br>
//          la ram de mi PC es: <b>${ram}</b> <br>
//          el espacio de mi PC es: <b>${espacio}</b>`;

// document.write(frase);

// ******** BUCLES ********

// !CLASE 3

// let numero = 0;

// ?WHILE

// while (numero < 6) {
//     numero ++;
    
//     document.write(numero + "<br>");
    
// }

// ?DO WHILE

// do {
//     numero ++;
//     document.write(numero + "<br>")
    
// } while (numero <= 6);

// document.write("fin");

// !CLASE 4

// ?FOR

// ?cancela el bucle
// for (let i = 0; i <20; i++) {

//     if (i == 12) {
//         break;
//     }
//     document.write(i + "<br>")
// }

// document.write("<br>")

// ?saltea el numero 12
// for (let i = 0; i <20; i++) {

//     if (i == 12) {
//         continue;
//     }
//     document.write(i + "<br>")
// }

// !CLASE 5

// let animales = ["gato","perro","dinosaurio rex"];

// ?MUESTRA LA POSICION DE LOS ELEMENTOS
// for(animal in animales){
//     document.write(animal + "<br>");
// }

// document.write("<br>");

// ?MUESTRA LOS ELEMENTOS DE LA LISTA
// for(animal of animales){
//     document.write(animal + "<br>");
// }

// !CLASE 6

// array1 = ["maria", "josefa", "roberta"];
// array2 = ["pedro", "marcelo", array1, "josefina"];

// forRancio:
// for (let array in array2) {
//     if (array == 2) {

//         for(let array of array1){
//             if (array == "maria") {
//                 continue forRancio;
//             }

//             document.write(array + "<br>");
//         }
//     }else{
//         document.write(array2[array] + "<br>")
//     }
    
// }

