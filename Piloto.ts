import { Avion } from "./Avion";

export class Piloto{
    private nombre: String;
    private horasDeExperiencia: number;
    private avionAsignado: Avion;

    constructor(nombre: String, horasDeExperiencia: number, avionAsignado: Avion){
        this.nombre = nombre;
        this.horasDeExperiencia = horasDeExperiencia;
        this.avionAsignado = avionAsignado;
    }

    public mostrarEstadoPiloto(): void {
        console.log("=== ESTADO DEL PILOTO ===");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Horas de experiencia: ${this.horasDeExperiencia}`);
        console.log(
            `Avión asignado: ${this.avionAsignado.obtenerDetalle()}`
        );
    }
}