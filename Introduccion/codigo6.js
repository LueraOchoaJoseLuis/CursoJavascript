// TE QUEDASTE EN EL MINUTO 4:03:49

// ********* POO **********

// !CLASE 1

// class animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>")
//     }
// }

// const perro = new animal("perro",5,"rojo");
// const gato = new animal("gato",2,"negro");
// const pajaro = new animal("pajaro",1,"verde");


// TODO: Primera forma de mostrar info
// document.write(perro.info + "<br>")
// document.write(gato.info + "<br>")
// document.write(pajaro.info + "<br>")

// TODO: Segunda forma de mostrar info, solo si usas verInfo()
// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

// !CLASE 2

// class Animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>")
//     }
//     ladrar(){
//         if (this.especie == "perro") {
//             document.write("Wau" + "<br>");
            
//         }else{
//             document.write("No puede ladrar , ya que es un " + this.especie + "<br>")
//         }
//     }
// }

// TODO: HERENCIA
// class Perro extends Animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = null;
//     }
//     set setRaza(newName){
//         this.raza = newName;
//     }

//     get getRaza(){
//         return this.raza;
//     }

// }

// const perro = new Perro("perro",5,"rojo","doberman");
// const gato = new Animal("gato",2,"negro","negro");
// const pajaro = new Animal("pajaro",1,"verde","verde");

// perro.setRaza = "Pedro";
document.write(perro.getRaza)

