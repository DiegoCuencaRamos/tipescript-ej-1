interface Comunindad {
    nombre: string;
    direccion: string;
    administrador?: Administrador;
    inmuebles?: (Casa | Piso | Garaje)[];
}

interface Inmueble<Type> {
    nombre: Type;
}

interface Casa extends Inmueble<'casa'> {
    metrosCuadrados: number;
    numeroDePlantas: number;
}

interface Piso extends Inmueble<'piso'> {
    metrosCuadrados: number;
}

interface Garaje extends Inmueble<'garaje'> {
    numeroDePlaza: number;
}

interface Usuario {
    nombre: string;
    email: string;
    telefono: number;
}

interface Administrador extends Usuario {
    convocarJunta: (propietarios:Propietario[]) => boolean[];
}

interface Propietario extends Usuario {
    inmueble: Casa | Piso | Garaje;
    votar: () => boolean;
} 

interface Voto {
    resultado: boolean;
}

export { 
    Comunindad, 
    Inmueble,
    Casa, 
    Piso, 
    Garaje, 
    Usuario, 
    Administrador, 
    Propietario, 
    Voto 
}