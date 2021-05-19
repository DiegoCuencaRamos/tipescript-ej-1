"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiComunidad = exports.MiGaraje = exports.MiPiso = exports.MiCasa = exports.MiPropietario = exports.MiAdministrador = exports.MiUsuario = void 0;
// 1. Usuarios
var MiUsuario = /** @class */ (function () {
    function MiUsuario(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
    return MiUsuario;
}());
exports.MiUsuario = MiUsuario;
var MiAdministrador = /** @class */ (function (_super) {
    __extends(MiAdministrador, _super);
    function MiAdministrador(nombre, email, telefono) {
        var _this = _super.call(this, nombre, email, telefono) || this;
        _this.rol = 'administrador';
        return _this;
    }
    MiAdministrador.prototype.convocarJunta = function (propietarios) {
        var votos = [];
        propietarios.forEach(function (propietario) {
            var voto = propietario.votar();
            votos.push(voto);
        });
        return votos;
    };
    return MiAdministrador;
}(MiUsuario));
exports.MiAdministrador = MiAdministrador;
var MiPropietario = /** @class */ (function (_super) {
    __extends(MiPropietario, _super);
    function MiPropietario(nombre, email, telefono, inmueble) {
        var _this = _super.call(this, nombre, email, telefono) || this;
        _this.rol = 'propietario';
        _this.inmueble = inmueble;
        return _this;
    }
    MiPropietario.prototype.votar = function () {
        return Math.random() < 0.5 ? true : false;
    };
    return MiPropietario;
}(MiUsuario));
exports.MiPropietario = MiPropietario;
// 2. Proiedades
var MiCasa = /** @class */ (function () {
    function MiCasa(metrosCuadrados, numeroDePlantas) {
        this.nombre = 'casa';
        this.metrosCuadrados = metrosCuadrados;
        this.numeroDePlantas = numeroDePlantas;
    }
    return MiCasa;
}());
exports.MiCasa = MiCasa;
var MiPiso = /** @class */ (function () {
    function MiPiso(metrosCuadrados) {
        this.nombre = 'piso';
        this.metrosCuadrados = metrosCuadrados;
    }
    return MiPiso;
}());
exports.MiPiso = MiPiso;
var MiGaraje = /** @class */ (function () {
    function MiGaraje(numeroDePlaza) {
        this.nombre = 'garaje';
        this.numeroDePlaza = numeroDePlaza;
    }
    return MiGaraje;
}());
exports.MiGaraje = MiGaraje;
// 3. Comunidad
var MiComunidad = /** @class */ (function () {
    function MiComunidad(nombre, dirccion, administrador, inmuebles) {
        this.nombre = nombre;
        this.direccion = dirccion;
        this.administrador = administrador;
        this.inmuebles = inmuebles;
    }
    return MiComunidad;
}());
exports.MiComunidad = MiComunidad;
