"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inmuebles = exports.propietarios = void 0;
var classes_1 = require("./classes");
// 1. Basic data
var propietariosData = [
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
];
// 2. Structured data
var propietarios = [];
exports.propietarios = propietarios;
var inmuebles = [];
exports.inmuebles = inmuebles;
propietariosData.forEach(function (propietario) {
    var nombre = propietario[0], email = propietario[1], telefono = propietario[2], inmueble = propietario[3];
    // Propietarios
    propietarios.push(new classes_1.MiPropietario(nombre, email, telefono, inmueble));
    // Inmuebles
    if (inmueble.nombre === 'piso') {
        inmuebles.push(new classes_1.MiPiso(inmueble.metrosCuadrados));
    }
    else if (inmueble.nombre === 'garaje') {
        inmuebles.push(new classes_1.MiGaraje(inmueble.numeroDePlaza));
    }
    else {
        inmuebles.push(new classes_1.MiCasa(inmueble.metrosCuadrados, inmueble.numeroDePlantas));
    }
});
