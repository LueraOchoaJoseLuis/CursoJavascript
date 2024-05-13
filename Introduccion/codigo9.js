// ******** METODOS DE CADENA **********

// let cadena = "cadena de prueba";
let cadena = "  ABCDEFGabcdefg  ";
// let cadena2 = "cadena prueba"
let cadena3 = "50";
let nombres = ["pedro","maria","jorge","camilo","popo"];
let numeros = [1,5,7,2,3,9,0];

// ? CONCAT : los une
// resultado = cadena.concat(cadena2)

// ? STARTWITH : empieza con
// resultado = cadena.startsWith(cadena2);

// ? ENDSWITH : termina con
// resultado = cadena.endsWith(cadena2);

// ? INCLUDES : verifica si las palabras estan incluida en la otra
// resultado = cadena.includes("prueba");

// ? INDEXOF : Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
// resultado = cadena.indexOf("prueba");
// document.write(`${resultado} <br>`);
// document.write(cadena[10]);

// ? LASTINDEXOF : Devuelve el ultimo indice del primer caracter de la cadena , si no existe , devuelve -1
// resultado = cadena.lastIndexOf("prueba");
// document.write(resultado);

// ? PADSTART : rellena la cadena al inicio para que ocupe los 17 espacios, si la cadena es mayor o igual al que se deberia rellenar no ocurrira nada ya que esta lleno y no es necesario aumentar caracteres
// resultado = cadena.padStart(17,"ab");
// document.write(resultado);

// ? PADEND : rellena la cadena al final para que ocupe los 17 espacios, si la cadena es mayor o igual al que se deberia rellenar no ocurrira nada ya que esta lleno y no es necesario aumentar caracteres
// resultado = cadena.padEnd(20,"ab");
// document.write(resultado);

// ? REPEAT : Es para repetir la cadena
// resultado = cadena.repeat(4);
// document.write(resultado);

// ? SPLIT : Lo que hace es separar los valores, tu eliges con que separarlos con la primera linea de codigo
// resultado = cadena.split("");
// document.write(resultado[1]);

// ?SUBSTRING : te muestra las letras desde el numero que tu eliges y el final que elijas
// resultado = cadena.substring(0,2);
// document.write(resultado);

// ?TOLOWERCASE : Convierte una cadena a minuscula
// resultado = cadena.toLowerCase();
// document.write(resultado);

// ?TOLOWERCASE : Convierte una cadena a mayuscula
// resultado = cadena.toUpperCase();
// document.write(resultado);

// ?TOSTRING : Convierte datos numericos a String
// resultado = cadena3.toString();
// document.write(resultado + 2);

// ?TRIM : Elimina los espacios en blanco al final de una cadena
// let resultado = cadena.trim();
// document.write(resultado.length);

// ?TRIMEND : Elimina los espacios en blanco al final de una cadena
// let resultado = cadena.trimEnd();
// document.write(resultado.length);

// ?TRIMSTART : Elimina los espacios en blanco al comienzo de una cadena
// let resultado = cadena.trimStart();
// document.write(resultado.length);

// !METODOS TRANSFORMADORES

// ?POP : Elimina el ultimo elemento de una array y lo devuelve
// document.write(nombres + "<br>");
// let resultado = nombres.pop()
// document.write("Se elimino : " + resultado + "<br>");
// document.write(nombres)

// ?SHIFT : Elimina el primer elemento de una array y lo devuelve
// document.write(nombres + "<br>");
// let resultado = nombres.shift()
// document.write("Se elimino : " + resultado + "<br>");
// document.write(nombres)

// ?PUSH : Agrega un elemento al array al final de la lista
// document.write(nombres + "<br>");
// let resultado = nombres.push("juancito","kaka")
// document.write("Se agrego el elemento(s): " + resultado + "<br>");
// document.write(nombres)

// ?REVERSE : Invierte el orden de los elementos de un array
// document.write(nombres + "<br>");
// let resultado = nombres.reverse()
// document.write("Se invierte el orden : " + nombres)

// ?UNSHIFT : Agrega uno o mas elementos al inicio del array 
// document.write(nombres + "<br>");
// let resultado = nombres.unshift("juancito","kaka")
// document.write("Se agrego el elemento(s): " + resultado + "<br>");
// document.write(nombres)

// ?SORT : Ordena los elementos de un arreglo(array) localmente y devuelve el arreglo ordenado , ordena los numeros del minimio al maximo y las palabras en orden alfabetico
// document.write(numeros + "<br>");
// numeros.sort()
// document.write(numeros)

// ?SPLICE : Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. El primer numero es la posicion que eliges y el segundo el numero de elementos para eliminar desde esa posicion, lo que esta en comillas es para agregar elementos dentro del espacio
// document.write(numeros + "<br>");
// numeros.splice(1,2,"29","90","56")
// document.write(numeros)

// !METODOS ACCESORES

// ?JOIN : Une todos los elementos de una matriz ( u objetos similar) en una cadena y la devuelve.
// document.write(nombres + "<br>");
// let resultado = nombres.join(" - ");
// document.write(resultado);

// otro
// document.write(nombres + "<br>");
// let resultado = nombres.join("<br>elemento: ");
// document.write("elemento: " + resultado);

// ?SLICE : Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido), se muestran todos menos el ultimo elemento, si se usa un cadena muy larga agregar -1 al final
// document.write(nombres + "<br>");
// let resultado = nombres.slice(0,2);
// document.write(resultado);


// !METODOS REPETICION

// NOS QUEDAMOS EN EL MINUTO 6:02:34 

// ?FILTER : Crea un nuevo array con todos los elementos que cumplan la condicion

// TODO: Primera forma
// numeros.filter(numero => document.write(numero + "<br>"))

// document.write("<br>")

// TODO: Segunda forma
// numeros.filter(function(numero){
//     document.write(numero + "<br>")
// })

// TODO: Elimina los nombres que tengan 4 letras o simplemento no los muestra
// resultado = nombres.filter(nombre => nombre.length > 4)
// document.write(resultado)

// ?FOREACH : Ejecuta la funcion indicada una vez por cada elemento del array.

// numeros.forEach(function(numero){
//     document.write(numero + "<br>")
// })




