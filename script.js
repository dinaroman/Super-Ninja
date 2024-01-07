//SUPER NINJA
class Ninja {
    constructor(nombre, salud = 10, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log("El nombre del ninja es", this.nombre);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}, Sabiduría: ${this.sabiduria}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`Se añadieron +10 de salud al ninja. Salud: ${this.salud}`);
    }

}

class Sensei extends Ninja {
    constructor(nombre, ){
        super(nombre, 200, 10, 10, );
        this.sabiduria = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

}
const ninja = new Ninja("Dina");

ninja.sayName();
ninja.showStats();
ninja.drinkSake();

const superSensei = new Sensei("Maestro Shifu");
superSensei.speakWisdom();
superSensei.showStats();