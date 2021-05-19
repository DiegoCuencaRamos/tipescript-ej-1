import { MiCasa, MiGaraje, MiPiso, MiPropietario } from "./classes"
import { Casa, Piso, Garaje, Propietario } from "./types"

// 1. Basic data
const propietariosData:[string, string, number, (Casa | Piso | Garaje)][] = [
    // Pisos
    ['Diego', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Mario', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Pedro', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Andres', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Raquel', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Natalia', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Blanca', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Mary', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Samuel', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Aitor', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Alejandro', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Alejandra', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Aurelio', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Hector', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],
    ['Rafa', 'diego@diego.com', 123456789, { nombre: 'piso', metrosCuadrados: 90 }],

    // Garajes
    ['Maria', 'diego@diego.com', 123456789, { nombre: 'garaje', numeroDePlaza: 1 }],
    ['Antonio', 'diego@diego.com', 123456789, { nombre: 'garaje', numeroDePlaza: 1 }],
    ['Antonia', 'diego@diego.com', 123456789, { nombre: 'garaje', numeroDePlaza: 1 }],
    ['Dionisio', 'diego@diego.com', 123456789, { nombre: 'garaje', numeroDePlaza: 1 }],
    ['Alvaro', 'diego@diego.com', 123456789, { nombre: 'garaje', numeroDePlaza: 1 }],
    ['Pablo', 'diego@diego.com', 123456789, { nombre: 'garaje', numeroDePlaza: 1 }],
    ['Pedro', 'diego@diego.com', 123456789, { nombre: 'garaje', numeroDePlaza: 1 }],
    ['Rosalia', 'diego@diego.com', 123456789, { nombre: 'garaje', numeroDePlaza: 1 }],
    ['Ramiro', 'diego@diego.com', 123456789, { nombre: 'garaje', numeroDePlaza: 1 }],
    ['Sandra', 'diego@diego.com', 123456789, { nombre: 'garaje', numeroDePlaza: 1 }], 
]

// 2. Structured data
const propietarios:Propietario[] = []
const inmuebles:(Casa | Piso | Garaje)[] = []

propietariosData.forEach(propietario => {
    const [ nombre, email, telefono, inmueble ] = propietario

    // Propietarios
    propietarios.push(new MiPropietario(nombre, email, telefono, inmueble))

    // Inmuebles
    if(inmueble.nombre === 'piso') {
        inmuebles.push(new MiPiso(inmueble.metrosCuadrados))
    } else if(inmueble.nombre === 'garaje') {
        inmuebles.push(new MiGaraje(inmueble.numeroDePlaza))
    } else {
        inmuebles.push(new MiCasa(inmueble.metrosCuadrados, inmueble.numeroDePlantas))
    }
})

export {
    propietarios,
    inmuebles
}