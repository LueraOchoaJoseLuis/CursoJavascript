//! ******** PRIMER PROBLEMA ********

// class Calculadora{
//     sumar(num1,num2){
//         return parseInt(num1) + parseInt(num2);
//     }
//     restar(num1,num2){
//         return parseInt(num1) - parseInt(num2);
//     }
//     dividir(num1,num2){
//         return parseInt(num1) / parseInt(num2);
//     }
//     multiplicar(num1,num2){
//         return parseInt(num1) * parseInt(num2);
//     }
//     potenciar(num,exp){
//         let numero = num;
//         for(var i=1; i < exp; i++){
//             numero = numero * num;
//         }
//         return numero;
//     }
//     raizCuadrada(num){
//         return Math.sqrt(num);
//     }
//     raizCubica(num){
//         return Math.cbrt(num);
//     }

// }

// const calculadora = new Calculadora();

// alert("Que operacion desea realizar");
// let operacion = prompt("1: sumar, 2:restar, 3:dividir, 4:multiplicar, 5:potenciacion, 6:raiz Cuadrada, 7:raiz Cubica")

// if (operacion ==1) {
//     let numero1 = prompt("Primer numero para sumar");
//     let numero2 = prompt("Segundo numero para sumar");
//     resultado = calculadora.sumar(numero1, numero2);
//     alert(`tu resultado es ${resultado}`)
// }else if (operacion ==2) {
//     let numero1 = prompt("Primer numero para restar");
//     let numero2 = prompt("Segundo numero para restar");
//     resultado = calculadora.restar(numero1, numero2);
//     alert(`tu resultado es ${resultado}`)
// }else if (operacion ==3) {
//     let numero1 = prompt("Primer numero para dividir");
//     let numero2 = prompt("Segundo numero para dividir");
//     resultado = calculadora.dividir(numero1, numero2);
//     alert(`tu resultado es ${resultado}`)
// }else if (operacion ==4) {
//     let numero1 = prompt("Primer numero para multiplicar");
//     let numero2 = prompt("Segundo numero para multiplicar");
//     resultado = calculadora.multiplicar(numero1, numero2);
//     alert(`tu resultado es ${resultado}`)
// }else if (operacion ==5) {
//     let numero1 = prompt("Primer numero para potenciar");
//     let numero2 = prompt("Exponente");
//     resultado = calculadora.potenciar(numero1, numero2);
//     alert(`tu resultado es ${resultado}`)
// }else if (operacion ==6) {
//     let numero1 = prompt("Conocer la raiz cuadrada de: ");
//     resultado = calculadora.raizCuadrada(numero1);
//     alert(`tu resultado es ${resultado}`)
// }else if (operacion ==7) {
//     let numero1 = prompt("Conocer la raiz cubica");
//     resultado = calculadora.raizCubica(numero1);
//     alert(`tu resultado es ${resultado}`)
// }else{
//     alert("no se ha encontrado la operacion")
// }

//! ********* SEGUNDO PROBLEMA *********

// const obtenerInformacion = (materia)=>{
//     const materias = {
//         fisica: ["Perez","pedro","pepito","cofla","maria"],
//         programacion: ["Dalto","pedro","juan","pepito"],
//         logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
//         quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"],
//     }
//     if (materias[materia] !== undefined) {
//         return [materias[materia],materia,materias];
//     }else{
//         return materias
//     }
// }

// const mostrarInformacion = (materia) =>{
//     let informacion = obtenerInformacion(materia);
//     if(informacion!==false){
//         let profesor = informacion[0][0];
//         alumnos = informacion[0];
//         alumnos.shift();
//         document.write(`El profesor de <b>${informacion[1]}</b>: <b style="color:red">${profesor}</b><br> Los alumnos son: <b style="color:blue"> ${alumnos} </b><br><br> `)
//     }
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
//     ${alumno}</b> está en <b>${cantidadTotal}  clases</b><br> Esta cursando las clases: <b style='color:green'>${clasesPresentes}</b><br>`;
// }


// mostrarInformacion("fisica");
// mostrarInformacion("programacion");
// mostrarInformacion("logica");
// mostrarInformacion("quimica");

// document.write(cantidadDeClases("cofla"))
// document.write(cantidadDeClases("maria"))
// document.write(cantidadDeClases("pedro"))

//! ********* TERCER PROBLEMA *********

// let materias = {

//     fisica: ["Perez","pedro","pepito","cofla","maria"],
//     programacion: ["Dalto","pedro","juan","pepito"],
//     logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
//     quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"],
// }

// const inscribir = (alumno,materia) =>{
//     personas = materias[materia];
//     if (personas.length >= 21) {
//         document.write(`lo siento ${alumno} las clase de ${materia} ya estan llenas <br>`)
//     }else{
//         personas.push(alumno);
//         if (materia == "fisica") {
//             materias = {
//                 fisica: personas,
//                 programacion: materias['programacion'],
//                 logica: materias['logica'],
//                 quimica: materias['quimica']
//             }
//         }else if (materia == "programacion") {
//             materias = {
//                 fisica: materias['fisica'],
//                 programacion: personas,
//                 logica: materias['logica'],
//                 quimica: materias['quimica']
//             }
            
//         }else if (materia == "logica") {
//             materias = {
//                 fisica: materias['fisica'],
//                 programacion: materias['programacion'],
//                 logica: personas,
//                 quimica: materias['quimica']
//             }
            
//         }else if (materia == "quimica") {
//             materias = {
//                 fisica: materias['fisica'],
//                 programacion: materias['programacion'],
//                 logica: materias['logica'],
//                 quimica: personas,
//             }
            
//         }
//         document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente. <br>`)
//     }

// }

// document.write(materias['fisica'] + "<br>")

// inscribir("pedrito","fisica")
// inscribir("jorge","fisica")
// inscribir("ramses","fisica")
// inscribir("pedrito","fisica")
// inscribir("jorge","fisica")
// inscribir("ramses","fisica")
// inscribir("pedrito","fisica")
// inscribir("jorge","fisica")
// inscribir("ramses","fisica")
// inscribir("pedrito","fisica")
// inscribir("jorge","fisica")
// inscribir("ramses","fisica")
// inscribir("pedrito","fisica")
// inscribir("jorge","fisica")
// inscribir("ramses","fisica")
// inscribir("pedrito","fisica")
// inscribir("jorge","fisica")
// inscribir("ramses","fisica")


// document.write("<br>" + materias['fisica'])

// NOS QUEDAMOS EN EL MINUTO 07:00:18