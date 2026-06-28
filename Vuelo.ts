import { PlanDeVuelo } from "./PlanDeVuelo";

export class Vuelo{
    private codigoDeVuelo: String;
    private planDeVuelo: PlanDeVuelo;

    constructor(codigoDeVuelo: String, ciudadDeOrigen: String, ciudadDeDestino: String){
        this.codigoDeVuelo = codigoDeVuelo;
        this.planDeVuelo = new PlanDeVuelo(ciudadDeOrigen,ciudadDeDestino);
    }

    public mostrarDetalleVuelo(): void {
        console.log("=== DETALLE DEL VUELO ===");
        console.log(`Código: ${this.codigoDeVuelo}`);
        console.log(`Ruta: ${this.planDeVuelo.obtenerRuta()}`);
    }
}