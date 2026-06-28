export class PlanDeVuelo{
    private ciudadDeOrigen: String;
    private ciudadDeDestino: String;

    constructor(ciudadDeOrigen: String, ciudadDeDestino: String){
        this.ciudadDeOrigen = ciudadDeOrigen;
        this.ciudadDeDestino = ciudadDeDestino;
    }
    public obtenerRuta(): string {
        return `${this.ciudadDeOrigen} -> ${this.ciudadDeDestino}`;
    }
}