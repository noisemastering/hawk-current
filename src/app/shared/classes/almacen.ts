import { Locacion } from "./locacion";

export class Almacen{        
    AlmacenID: number;
    Clave: string;
    Nombre: string;
    Notas: string;
    Creado: string | null;
    Creo: number;
    Modificado: string | null;
    Modifico: number;
	Keywords: string;
    Locaciones: Locacion[];
}