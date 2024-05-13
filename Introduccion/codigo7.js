// PROBLEMA

class Celular{

    // TODO: CONTRUCTOR --- constructor(parametro1, parametro2)

    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    // TODO: METODO presionarBotonEncencido

    presionarBotonEncendido(){
        if (this.encendido) {
            alert("celular prendido");
            this.encendido = true;
        }else{
            alert("Celular apagado")
            this.encendido = false;
        }
    }

    // TODO: METODO reiniciar

    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciando celular");
        }else{
            alert("el celular esta apagado")
        }
    }

    // TODO: METODO tomarFotos
    
    tomarFotos(){
        alert(`foto tomada en una resolucion de : ${this.resolucionDeCamara}`)
    }

    // TODO: METODO grabarVideo

    grabarVideo(){
        alert(`grabando video en resolucion de : ${this.resolucionDeCamara}`)
    }

    // TODO: METODO mobileInfo

    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        `;
    }
}

// TODO: HERENCIA
// TODO: Se crea una nueva clase y se usa "extends" para crear una subclase(clase hija) que hereda de otra clase(clase padre o superclase)
// TODO: La funcion "super()" se utiliza dentro de una subclase(clase hija) para llamar a los metodos del mismo nombre definidos en la clase padre(superclase)

// PROBLEMA 2

class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }
    InfoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`    
    }
}

// TODO: Se crean variables y se añaden instancias, las instancias se crean usando "new Celular()"
celular1 = new Celular(
    "rojo",
     "150g",
     "5",
     "full hd",
     "2GB");

celular2 = new Celular(
    "negro",
    "152g",
    "5.4",
    "hd",
    "1GB");

celular3 = new Celular(
    "blanco",
    "146g",
    "5.9",
    "full hd",
    "2GB");

// TODO: En esta parte a pesar de que "document.write()" se encuentre antes de los "alerts()", este se ejecutara despues de las alerts() ya que:
// TODO: Esto se debe a que document.write() está esperando a que el DOM (Documento Object Model) esté completamente cargado antes de modificar el documento, lo cual ocurre después de que se hayan mostrado todas las alertas. Por lo tanto, aunque document.write() esté al principio del código, su ejecución se pospone hasta después de que se hayan mostrado todas las alertas.

document.write(`
${celular1.mobileInfo()} <br>
`)

celular1.presionarBotonEncendido();
celular1.tomarFotos();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama("rojo","130g","5.2","4K","3GB","full hd");
celular2 = new CelularAltaGama("negro","142g","6","4K","4GB","hd");

document.write(`
${celular1.InfoAltaGama()} <br><br>
${celular2.InfoAltaGama()} <br>
`)

// NOS QUEDAMOS EN EL MINUTO 5:01:43