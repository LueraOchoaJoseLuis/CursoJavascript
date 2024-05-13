// ******** DOM *********

// ?GETELEMENTBYID : Selecciona un elemento por ID
// document.getElementById("parrafo")

// ?GETELEMENTBYTAGNAME : Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
// parrafo = document.getElementsByTagName("p")
// document.write(parrafo)

// ?QUERYSELECTOR : Devuelve el primer elemento que coincida con el grupo especificado de selectores
// TODO : Para seleccionar la clase se usa el "." como en CSS
// parrafo = document.querySelector(".parrafo");
// TODO : Para seleccionar el ID se usa el "#" igual que en CSS supongo XD
// parrafo = document.querySelector("#parrafo");
// document.write(parrafo)

// ?QUERYSELECTORALL : Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

// parrafo = document.querySelectorAll(".parrafo")
// document.write(parrafo[1])

// NOS QUEDAMOS EN EL MINUTO 8:00:00

// ********* METODOS PARA DEFINIR OBTENER Y ELIMINAR ATRIBUTOS *********

// const rangoEtario = document.querySelector(".rangoEtario");

// ?SETATTRIBUTE : Modifica el valor de un atributo
// valorDelAtributo = rangoEtario.getAttribute("type")

// ?GETATTRIBUTE : Obtiene el valor de un atributo
// rangoEtario.setAttribute("type","text")

// ?REMOVEATTRIBUTE : Remueve el valor de un atributo

// rangoEtario.setAttribute("type")

// ********* ATRIBUTOS GLOBALES *********

// ?CLASS : LISTA DE CLASES DEL ELEMENTO SEPARADAS POR ESPACIOS

// ?CONTENTEDITABLE : INDICA SI EL ELEMENTO PUEDE SER MODIFICABLE POR EL USUARIO (BOOL)

// const titulo = document.querySelector(".titulo")
// titulo.setAttribute("contentEditable","true")

// ?DIR : INDICA LA DIRECCIONALIDAD DEL TEXTO

// const titulo = document.querySelector(".titulo")
// titulo.setAttribute("dir","rtl")

// ?HIDDEN : INDICA SI EL ELEMENTO AUN NO ES, O YA NO ES, RELEVANTE

// const titulo = document.querySelector(".titulo")
// titulo.removeAttribute("hidden")

// ?ID : DEFINE UN IDENTIFICADOR UNICO


// ?STYLE : CONTIENE DECLARACIONES DE ESTILO CSS PARA SER APLICADAS AL ELEMENTO

// ?TABINDEX : INDICA SI EL ELEMENTO PUEDE OBTENER UN FOCUS DE INPUT

// const titulo = document.querySelector(".titulo")
// titulo.setAttribute("tabindex","0")

// ?TITLE : CONTIENE UN TEXTO CON INFORMACION RELACIONADA AL ELEMENTO AL QUE PERTENECE

// const titulo = document.querySelector(".titulo")
// titulo.setAttribute("title","jajajajxd")

// ********* ATRIBUTOS DE INPUTS **********

// ? CLASSNAME : Nos muestra lo que tiene dentro del class
// const input = document.querySelector(".input-normal");
// document.write(input.className)

// ?VALUE : Nos dice lo que esta dentro del input

// const input = document.querySelector(".input-normal");
// document.write(input.value)

// ?TYPE : 

// const input = document.querySelector(".input-normal");
// input.type = "color"

// ?ACCEPT : 

// const input = document.querySelector(".input-normal");
// input.accept = "image/png"

// ?FORM : 

// const input = document.querySelector(".input-normal");
// input.form = "color"

// ?MINLENGHT : 

// const input = document.querySelector(".input-normal");
// input.minLength = "4"

// ?PLACEHOLDER

// const input = document.querySelector(".input-normal");
// input.placeholder = "a que no me borras"

// ?REQUIRED

// const input = document.querySelector(".input-normal");
// input.required = " ";

// NOS QUEDAMOS EN EL MINUTO 8:30:00

// ****** ATRIBUTOS STYLE *******

// const titulo = document.querySelector(".titulo");
// titulo.style.color = "#456623"
// titulo.backgroundColor = "#456623"

// ******** CLASES, CLASSLIST Y METODOS DE CLASSLIST ***********

// ? ADD: AÑADE UNA CLASE

// const titulo = document.querySelector(".titulo");
// titulo.classList.add("grande")

// ? REMOVE: REMUEVE UNA CLASE

// const titulo = document.querySelector(".titulo");
// titulo.classList.remove("grande")

// ? ITEM: DEVUELVE LA CLASE DEL INDICE ESPECIFICADO

// const titulo = document.querySelector(".titulo");
// let valor = titulo.classList.item(2);
// document.write(valor)

// ? CONTAINS:  VERIFICA SI ESE ELEMENTO POSEE O NO, LA CLASE ESPECIFICADA

// const titulo = document.querySelector(".titulo");
// nombreDeClase = "grandeeee"
// let valor = titulo.classList.contains(nombreDeClase);
// if (valor) {
    
//     titulo.classList.remove(nombreDeClase);
// }else{
    
//     titulo.classList.add(nombreDeClase);
// }

// ? REPLACE: REEMPLAZA UNA CLASE POR OTRA

// const titulo = document.querySelector(".titulo");
// let valor = titulo.classList.replace("grande","chico");
// document.write(valor)

// ? TOGGLE: SI NO TIENE LA CLASE ESPECIFICADA, LA AGREGA SI YA LA TIENE, LA ELIMINA

// const titulo = document.querySelector(".titulo");
// nombreDeClase = "grande"
// let valor = titulo.classList.contains(nombreDeClase);
// titulo.classList.toggle("grande")

// ******** OBTENCION Y MODIFICACION DE ELEMENTOS **********

// ? TEXTCONTENT: DEVUELVE EL TEXTO DE CUALQUIER NODO
// ?INNERTEXT: DEVUELVE EL TEXTO VISIBLE DE UN NODE ELEMENT
// ?INNERHTML: DEVUELVE EL CONTENIDO HTML DE UN ELEMENTO
// ?OUTERHTML: DEVUELVE EL CODIGO HTML COMPLETO DEL ELEMENTO

// const titulo = document.querySelector(".titulo");
// let resultado = titulo.textContent;
// let resultado1 = titulo.innerHTML;
// let resultado2 = titulo.outerHTML;

// alert(resultado)
// alert(resultado1)
// alert(resultado2)

// ******** CREACION DE ELEMENTOS *********

// ? CREATEELEMENTS : 

// const contenedor = document.querySelector(".contenedor");
// const item = document.createElement("LI")

// for (let i = 0; i < 20; i++) {
//     item.innerHTML = "Este es un item de la lista"
//     contenedor.appendChild(item)
    
// }

// console.log(item)

// TE QUEDASTE EN 9:02:11

// ? CREATETEXTNODE : 

// ? CREATEDOCUMENTFRAGMENT : 

// const contenedor = document.querySelector(".contenedor");
// const fragmento = document.createDocumentFragment();

// for (let i = 0; i < 20; i++) {
//     const item = document.createElement("LI")
//     item.innerHTML = "Este es un item de la lista"
//     fragmento.appendChild(item)
    
// }

// console.log(fragmento)

// ? APPENDCHILD :

// ?FIRSTCHILD : 
// ?LASTCHILD :

// const contenedor = document.querySelector(".contenedor");

// TODO: PRIMER HIJO
// const primerHijo = contenedor.firstChild;
// console.log(primerHijo);

// TODO: ultimo HIJO
// const primerHijo = contenedor.lastChildChild;
// console.log(primerHijo);

// ?FIRSTELEMENTCHILD : 
// ?LASTELEMENTCHILD : 

// TODO: PRIMERO
// const contenedor = document.querySelector(".contenedor");
// const primerHijo = contenedor.firstElementChild;
// console.log(primerHijo);

// TODO: ULTIMO
// const contenedor = document.querySelector(".contenedor");
// const primerHijo = contenedor.lastElementChild;
// console.log(primerHijo);

// ?CHILDNODES : 

// const contenedor = document.querySelector(".contenedor");
// const hijos = contenedor.childNodes;
// hijos.forEach(hijo => console.log(hijo))
// console.log(hijos);

// ?CHILDREN :
// const contenedor = document.querySelector(".contenedor");
// const hijos = contenedor.children;
// console.log(hijos);

// **********METODOS DE CHILD (HIJOS) *************

// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// const h2_antiguo = document.querySelector(".h2");

// let respuesta = contenedor.hasChildNodes();

// if(respuesta){
//     document.write("El elemento tiene hijos")
// }else{
//     document.write("El elemento no tiene hijos")
// }

// ! ACA ME QUEDE PORQUE ME PERDI EN LA EXPLICACION DEL WEON, MAL HAY DALTO






