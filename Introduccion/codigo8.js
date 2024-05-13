class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;

    }
    abrir(){
        if (this.iniciada == false) {
            this.iniciada = true;
            alert("app encendida");
        }
    }

    cerrar(){
        if (this.iniciada == false) {
            this.iniciada = true;
            alert("app cerrada");
        }
    }

    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("app instalada correctamente");
           
        }
    }

    desinstalar(){
        if (this.instalada == true) {
            this.instalada = false;
            alert("app desinstalada correctamente");
            
        }
    }

    abrir(){
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app encendida");
        }
    }

    cerrar(){
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app cerrada");
        }
    }

    appInfo(){
        return`
        Descargas : <b> ${this.descargas}</b><br>
        Puntuacion : <b> ${this.puntuacion}</b><br>
        Peso : <b> ${this.peso}</b><br>
        `
    }
}

// TODO: PRIMERA FORMA DE HACERLO

// app = new App("16.000","5 estrellas","900mb");
// app2 = new App("13.000","4 estrellas","400mb");
// app3 = new App("12.000","5 estrellas","100mb");
// app4 = new App("15.000","3 estrellas","200mb");
// app5 = new App("11.000","4.8 estrellas","300mb");
// app6 = new App("10.000","2 estrellas","500mb");
// app7 = new App("18.000","5 estrellas","700mb");

// document.write(`
// ${app.appInfo()} <br>
// ${app2.appInfo()} <br>
// ${app3.appInfo()} <br>
// ${app4.appInfo()} <br>
// ${app5.appInfo()} <br>
// ${app6.appInfo()} <br>
// ${app7.appInfo()} <br>
// `);

// app.instalar();
// app.desinstalar();
// app.abrir();
// app.cerrar();

// TODO: SEGUNDA FORMA DE HACERLO

const apps = [
    new App("16.000", "5 estrellas", "900mb"),
    new App("13.000", "4 estrellas", "400mb"),
    new App("12.000", "5 estrellas", "100mb"),
    new App("15.000", "3 estrellas", "200mb"),
    new App("11.000", "4.8 estrellas", "300mb"),
    new App("10.000", "2 estrellas", "500mb"),
    new App("18.000", "5 estrellas", "700mb")
];

document.write("<ul>");

apps.forEach(app => {
    document.write(`<li>${app.appInfo()}</li>`);
    document.write("<br>")
});

document.write("</ul>");


apps[0].instalar();
apps[0].desinstalar();
apps[0].abrir();
apps[0].cerrar();