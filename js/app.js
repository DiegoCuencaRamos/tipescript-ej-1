"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var classes_1 = require("./classes");
// 1. Crear comunidad: 15 pisos + 10 garajes
var pepe = new classes_1.MiAdministrador('Pepe', 'pepe@pepe.com', 123456789);
var nuevaComunidad = new classes_1.MiComunidad('Comunidad de vecinos', 'Madrid', pepe, data_1.inmuebles);
// 2. Convocar junta y hacer que voten
var votos = [];
if (nuevaComunidad.administrador) {
    votos = (_a = nuevaComunidad.administrador) === null || _a === void 0 ? void 0 : _a.convocarJunta(data_1.propietarios);
}
// 3. Recontar votos
var votosFavor = votos.filter(function (voto) { return voto; }).length;
var votosContra = votos.length - votosFavor;
console.log(data_1.propietarios.length + " han votado. " + votosFavor + " votaron si. " + votosContra + " votaron no.");
