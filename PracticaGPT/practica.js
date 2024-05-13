// !Operadores matemáticos:
// Escribe una función que tome dos números como parámetros y devuelva su suma, resta, multiplicación y división.

// let numero1 = prompt("Escribe el primer numero");
// let numero2 = prompt("Escribe el segundo numero");

// numero1 = parseFloat(numero1);
// numero2 = parseFloat(numero2);

// suma = numero1 + numero2;
// resta = numero1 - numero2;
// multiplicacion = numero1 * numero2;
// division = numero1/numero2;

// document.write(suma + "<br>");
// document.write(resta + "<br>");
// document.write(multiplicacion + "<br>");
// document.write(division + "<br>");
// document.write("***************" + "<br>")

// !Concatenación:
// Crea una variable que contenga tu nombre y otra variable que contenga tu edad. Luego, concatena estas variables en una frase que diga "Hola, mi nombre es [nombre] y tengo [edad] años."

// let nombre = prompt("Escribe tu nombre");
// let edad = prompt("Escribe tu edad");

// concatenacion = "" + nombre + edad;

// document.write(concatenacion + "<br>");
// document.write("***************" + "<br>")

// !Operadores lógicos:
// Escribe una función que tome la edad de una persona como parámetro y devuelva "Eres mayor de edad" si la edad es igual o mayor a 18, y "Eres menor de edad" si la edad es menor a 18.

// if (edad>=18) {
//     document.write("Eres mayor de edad" + "<br>")
// }else{
//     document.write("Eres menor de edad")
// }
// document.write("***************" + "<br>")

// !Condicionales:
// Crea una función que tome un número como parámetro y devuelva "Positivo" si el número es mayor que cero, "Negativo" si es menor que cero, y "Cero" si es igual a cero.

// let numero3 = prompt("Escribe un numero");
// numero3 = parseFloat(numero3);

// if (numero3>0) {
//     document.write("Positivo" + "<br>")
// }if (numero3<0) {
//     document.write("Negativo" + "<br>")
    
// } else {
//     document.write("Cero" + "<br>")
// }

// document.write("***************" + "<br>")

// !Arrays:
// Declara un array con nombres de frutas. Luego, escribe una función que recorra el array e imprima en la consola cada nombre de fruta.

// let frutas = ["fresa", "manzana", "mandarina", "platano"];

// for(fruta of frutas){
//     document.write(fruta + "<br>");
// }

// !Bucles (for):
// Utilizando un bucle for, imprime en la consola los números del 1 al 10.

// let numero = 0;

// for (let numero = 0; numero < 11; numero++) {
//     document.write(numero + "<br>")
    
// }

// !Bucles (while):
// Utilizando un bucle while, imprime en la consola los números del 1 al 10.

// let numero = 0;
// while (numero < 10) {
//     numero ++;
//     document.write(numero);
// }

// !Bucles (do while):
// Utilizando un bucle do while, solicita al usuario que ingrese un número mayor que 10. Continúa solicitando hasta que el usuario ingrese un número válido.

// let numero

// do {
//     numero = prompt("Ingresa un numero mayor a 10");
//     numero = parseFloat(numero);
// } while (numero<=10);

// document.write(numero);
// document.write("BIEN HECHO")

// !FUNCIONES

// ?FUNCION DE SUMA:
// Escribe una función llamada sumar que tome dos números como parámetros y devuelva su suma.


// function sumar(){
//     let num1 = prompt("El primer numero es: ");
//     let num2 = prompt("El segundo numero es: ");
//     num1 = parseInt(num1);
//     num2 = parseInt(num2);

//     let suma = num1 + num2;
//     document.write(suma);
// }

// sumar()

// ?FUNCION DE RESTA:
// Crea una función llamada restar que tome dos números como parámetros y devuelva su resta.

// function restar(){
//     let num1 = prompt("Ingresa el primer numero: ");
//     let num2 = prompt("Ingresa el segundo numero: ");
//     num1 = parseInt(num1);
//     num2 = parseInt(num2);
//     let resta = num1 - num2;
//     document.write(resta);
// }
// restar();

// ?FUNCION DE MULTIPLICACIÓN:
// Define una función llamada multiplicar que tome dos números como argumentos y devuelva su producto.

// function multiplicar(){
//     let num1 = prompt("Ingresa el primer numero: ");
//     let num2 = prompt("Ingresa el segundo numero: ");
//     num1 = parseInt(num1);
//     num2 = parseInt(num2);
//     let multiplicacion = num1 * num2;
//     document.write(multiplicacion);
// }
// multiplicar();

// ?FUNCION DE DIVISIÓN:
// Escribe una función llamada dividir que tome dos números como parámetros y devuelva su división. Asegúrate de manejar el caso donde el divisor sea cero.

// function division(){
//     let num1 = prompt("Ingresa el divisor: ");
//     let num2 = prompt("Ingresa el dividendo: ");
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     if (num1 > 0) {
//         let dividir= num1 / num2;
//         document.write(dividir);  
//     }else if (num1 < 0) {
//         document.write("i");
//     } else {
//         document.write("0")
//     }
// }
// division();

// ?FUNCION PARA CALCULAR EL AREA DE UN RECTANGULO:
// Crea una función llamada calcularAreaRectangulo que tome la longitud y el ancho de un rectángulo como parámetros y devuelva su área.

// function calcularAreaRectangulo(){
//     let num1 = prompt("Ingresa la longitud: ");
//     let num2 = prompt("Ingresa el ancho: ");
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     let area = num1 * num2;
//     document.write(area);
// }
// document.write("El area del rectangulo es: ");
// calcularAreaRectangulo()

// ?FUNCION PARA SALUDAR:
// Define una función llamada saludar que tome el nombre de una persona como parámetro y devuelva un saludo personalizado.

// function saludacion(){
//     let nombre = prompt("Ingresa tu nombre");
//     document.write(`Hola ${nombre} es un placer volver a verte`);
// }
// saludacion()

// ?FUNCION PARA DETERMINAR SI UN NUMERO ES PAR:
// Escribe una función llamada esPar que tome un número como parámetro y devuelva true si es par y false si es impar.

// function esPar(){
//     let numero = prompt("Ingresa un numero");
//     let dividir = numero % 2;
//     if (dividir == 0) {
//         document.write(true)
//     }else{
//         document.write(false)
//     }
// }
// esPar()

// ?FUNCION PARA CALCULAR EL FACTORIAL DE UN NUMERO:
// Crea una función llamada factorial que tome un número como parámetro y devuelva su factorial.

// function factorial() {
//     let numero = prompt("Ingresa un numero")

//     if (numero < 0) {
//         document.write("El factorial no está definido para números negativos.")
//     }else if (numero == 0) {
//         document.write("El factorial de 0 es: 0")
//     }else{
//         let resultado = 1;
//         for (let i = 2; i <= numero; i++) {
//         resultado *= i;    
//     }
//     document.write("El factorial del numero es: " + resultado)
//     }
// }

// factorial()

// ? POO

// Supongamos que estamos trabajando en un sistema de gestión de vehículos. Necesitamos definir una clase base llamada Vehiculo que represente las características comunes de todos los vehículos. Luego, queremos crear una subclase llamada Automovil que herede de Vehiculo y agregue características específicas de los automóviles.

// class Vehiculo{
//     constructor(marca,modelo,año,km){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//         this.kilometraje = km;
//     }

//     obtenerInformacion(){
//         return`
//         Marca del auto : <b>${this.marca} </b><br>
//         Modelo del auto : <b>${this.modelo} </b><br>
//         Año del auto : <b>${this.año} </b><br>
//         Kilometraje del auto : <b>${this.kilometraje}</b><br>
//         `;
//     }

// }

// class Automovil extends Vehiculo{
//     constructor(marca,modelo,año,km,tipoCombustible,numeroPuertas){
//         super(marca,modelo,año,km);
//         this.tipoComb = tipoCombustible;
//         this.numPuer = numeroPuertas;
//     }

//     arrancar(){
//         document.write("El automovil esta arrancando");
//     }

//     detener(){
//         document.write("El automovil se esta deteniendo");
//     }
// }

// const automovil1 = new Automovil("TOYOTA","Corolla", 2022,5000,"Gasolina",4);
// document.write(`${automovil1.obtenerInformacion()} <br>`);
// automovil1.arrancar();
// document.write("<br>")
// automovil1.detener();

// ? METODOS

// const obtenerInformacion = (asignatura)=>{
//     const asignaturas = {
//         geometria: ["Zegarra","Jose","Cordero","Marvin","Jerson"],
//         algebra: ["Cabrera","Jose","Cordero","Marvin"],
//         aritmetica: ["Luera","Jose","Cordero","Marvin","Jerson"],
//         calculo: ["Ochoa","Jose","Cordero","Jerson"],
//     }
//     if (asignaturas[asignatura] !== undefined) {
//         return [asignaturas[asignatura],asignatura,asignatura];
//     }else{
//         return asignaturas
//     }
// }

// const mostrarInformacion = (asignatura)=>{
//     let informacion = obtenerInformacion(asignatura);
//     if(informacion!==false){
//         let profesor = informacion[0][0];
//         alumnos = informacion[0];
//         alumnos.shift();
//         document.write(`El profesor de <b>${informacion[1]}</b>: <b style="color:red">${profesor}</b><br> Los alumnos son: <b style="color:blue"> ${alumnos} </b><br><br> `)
//         }
// }

// const cantidadDeClases = (alumno) =>{
//     let informacion = obtenerInformacion()
//     let clasesPresentes = [];
//     let cantidadTotal = 0;
//     for (info in informacion) {
//         if (informacion[info].includes(alumno)) {
//             cantidadTotal++;
//             clasesPresentes.push(" "+ info);
//         }
//     }
//     return `<b style='color:blue'>
//     ${alumno}</b> está en <b>${cantidadTotal}  clases</b><br> Esta cursando las clases: <bstyle='color:green'>${clasesPresentes}</b><br>`;
// }

// mostrarInformacion("geometria");
// mostrarInformacion("algebra");
// mostrarInformacion("aritmetica");
// mostrarInformacion("calculo");

// document.write(cantidadDeClases("Jose"))
// document.write(cantidadDeClases("Jerson"))
// document.write(cantidadDeClases("Marvin"))

// ******** OTRO EJEMPLO ***********

// const obtenerInformacion = (asignatura) => {
//     const asignaturas = {
//         matematicas: { profesor: "González", alumnos: ["Pedro", "Juan", "María", "Luis"] },
//         historia: { profesor: "Martínez", alumnos: ["Ana", "Carlos", "Sofía", "Jorge"] },
//         ciencias: { profesor: "López", alumnos: ["Elena", "Pablo", "Laura", "Miguel"] },
//         literatura: { profesor: "García", alumnos: ["Andrés", "Lucía", "Alejandro", "Carmen"] }
//     };
    // TODO: condición ? expresión_verdadera : expresión_falsa
//     return asignaturas[asignatura] !== undefined ? asignaturas[asignatura] : "No se encontró información sobre la asignatura.";
// };

// const mostrarInformacion = (asignatura) => {
//     let informacion = obtenerInformacion(asignatura);
    // TODO: Si informacion no es una cadena de texto, significa que contiene la información de la asignatura (un objeto), y el código dentro del bloque if procederá a mostrar la información. Si es una cadena de texto, significa que contiene un mensaje de error, y el código dentro del bloque else mostrará ese mensaje en lugar de la información de la asignatura.
//     if (typeof informacion !== "string") {
//         let profesor = informacion.profesor;
//         let alumnos = informacion.alumnos.join(", ");
//         document.write(`Profesor de ${asignatura}: ${profesor}<br> Alumnos inscritos: ${alumnos}<br><br>`);
//     } else {
//         document.write(informacion);
//     }
// };

// const cantidadDeClases = (alumno) => {
//     const asignaturas = ["matematicas", "historia", "ciencias", "literatura"];
//     let clasesPresentes = [];
//     let cantidadTotal = 0;
//     for (let i = 0; i < asignaturas.length; i++) {
//         let informacion = obtenerInformacion(asignaturas[i]);
//         if (typeof informacion !== "string" && informacion.alumnos.includes(alumno)) {
//             cantidadTotal++;
//             clasesPresentes.push(asignaturas[i]);
//         }
//     }
//     return `${alumno} está inscrito en ${cantidadTotal} clases. Cursa las clases de: ${clasesPresentes.join(", ")}.<br>`;
// };

// mostrarInformacion("matematicas");
// mostrarInformacion("historia");
// mostrarInformacion("ciencias");
// mostrarInformacion("literatura");

// document.write(cantidadDeClases("Pedro"));
// document.write(cantidadDeClases("Laura"));
// document.write(cantidadDeClases("Carlos"));












