import { Avion } from "./Avion";
import { Piloto } from "./Piloto";
import { Vuelo } from "./Vuelo";

const avion1 = new Avion("HC-ABC", "Boeing 737");

const piloto1 = new Piloto("Diego Quiñonez", 4500, avion1);

const vuelo1 = new Vuelo("AT-101", "UIO", "MEC");

piloto1.mostrarEstadoPiloto();
console.log("");
vuelo1.mostrarDetalleVuelo();