//Clases
class Persona{
    id
    nombre
    apellido

    constructor(id, nombre, apellido, fechaNacimiento){
        //logica de instanciación
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.cansancio = 0
        this.fechaNacimiento = fechaNacimiento
        this.fechaCreacion = new Date()
        this.informacionCompleta = `${this.nombre} - ${this.apellido} - Fecha de nacimiento: ${this.fechaNacimiento}`
    }

    caminar(kilometrosCaminados){
        this.cansancio = this.cansancio + (1 * kilometrosCaminados)
        console.log(`${this.nombre} ha caminado ${kilometrosCaminados} km., por lo que se encuentra con un nivel de cansancio ${this.cansancio}`)
    }

    dormir(){

    }

    hablar(){
        return null
    }
}

var persona1 = new Persona(1, "Luke", "Skywalker", new Date(2005, 9, 24)) // el mes es indexado como 0
var persona2 = new Persona(2, "Leia", "Skywalker", new Date(2010, 0, 10))

console.log(persona1)
persona1.caminar(15)
console.log(persona1)
//console.log(persona2)


//Intentar calcular la edad a partir de la fecha de nacimiento
//Implementar la funcion de dormir
