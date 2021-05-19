import { Comunindad, Inmueble, Casa, Piso, Garaje, Usuario, Administrador, Propietario, Voto } from './types'

// 1. Usuarios
class MiUsuario implements Usuario {
    nombre: string;
    email: string;
    telefono: number;

    constructor(
        nombre: string,
        email: string,
        telefono: number,
    ) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }    
}

class MiAdministrador extends MiUsuario implements Administrador {
    rol:string = 'administrador';
    
    constructor(
        nombre: string,
        email: string,
        telefono: number
    ) {
        super(nombre, email, telefono)
    }

    convocarJunta(propietarios:Propietario[]) {
        const votos:boolean[] = []

        propietarios.forEach(propietario => {
            const voto:boolean = propietario.votar()
            votos.push(voto)
        });

        return votos
    }
}

class MiPropietario extends MiUsuario implements Propietario {
    rol:string = 'propietario';
    inmueble: Casa | Piso | Garaje;

    constructor(
        nombre: string, 
        email: string, 
        telefono: number, 
        inmueble: Casa | Piso | Garaje
    ) {
        super(nombre, email, telefono);
        this.inmueble = inmueble;
    }

    votar() {
        return Math.random() < 0.5 ? true : false;
    }
} 

// 2. Proiedades
class MiCasa implements Casa {
    nombre: 'casa' = 'casa';
    metrosCuadrados: number;
    numeroDePlantas: number;

    constructor(
        metrosCuadrados: number, 
        numeroDePlantas: number
    ) {
        this.metrosCuadrados = metrosCuadrados;
        this.numeroDePlantas = numeroDePlantas;
    }
}

class MiPiso implements Piso {
    nombre: 'piso' = 'piso';
    metrosCuadrados: number;

    constructor(metrosCuadrados: number) {
        this.metrosCuadrados = metrosCuadrados
    }
}

class MiGaraje implements Garaje {
    nombre: 'garaje' = 'garaje';
    numeroDePlaza: number;

    constructor(numeroDePlaza: number) {
        this.numeroDePlaza = numeroDePlaza;
    }
}

// 3. Comunidad
class MiComunidad implements Comunindad {
    nombre: string;
    direccion: string;
    administrador?: Administrador;
    inmuebles?: (Casa | Piso | Garaje)[];

    constructor(
        nombre: string, 
        dirccion: string, 
        administrador?: Administrador, 
        inmuebles?: (Casa | Piso | Garaje)[]
    ) {
        this.nombre = nombre;
        this.direccion = dirccion;
        this.administrador = administrador;
        this.inmuebles = inmuebles;
    }
}

export {
    MiUsuario,
    MiAdministrador,
    MiPropietario,
    MiCasa,
    MiPiso,
    MiGaraje,
    MiComunidad,
}