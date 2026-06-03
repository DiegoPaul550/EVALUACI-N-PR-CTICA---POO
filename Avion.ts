export class Avion{
    private matricula: String;
    private modelo: String;

    constructor(matricula: String, modelo: String){
        this.matricula = matricula;
        this.modelo = modelo;
    }

    public obtenerDetalle(): String{
        return `Modelo: ${this.modelo}, Matrícula: ${this.matricula}`;
    }
}