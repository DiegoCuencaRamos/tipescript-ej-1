import { inmuebles, propietarios } from './data'
import { MiAdministrador, MiComunidad } from './classes'

// 1. Crear comunidad: 15 pisos + 10 garajes
const pepe = new MiAdministrador('Pepe', 'pepe@pepe.com', 123456789)
const nuevaComunidad = new MiComunidad('Comunidad de vecinos', 'Madrid', pepe, inmuebles)

// 2. Convocar junta y hacer que voten
let votos:boolean[] = [];

if(nuevaComunidad.administrador) {
    votos =  nuevaComunidad.administrador?.convocarJunta(propietarios)
}

// 3. Recontar votos
const votosFavor = votos.filter(voto => voto).length
const votosContra = votos.length - votosFavor

console.log(`${propietarios.length} han votado. ${votosFavor} votaron si. ${votosContra} votaron no.`)
