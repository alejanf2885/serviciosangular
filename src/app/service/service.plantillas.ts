import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Plantilla } from "../../models/Plantilla";

@Injectable()
export class ServicePlantillas {

    constructor() {}


    async getPlantillas(): Promise<Array<string>> {
        let request = 'api/Plantilla/Funciones';
        let url = environment.urlPlantillas + request;
        const response = await fetch(url);
        return await response.json();
    }

    async searchPlantilla(plantilla: string): Promise<Array<Plantilla>> {
        let request = `/api/Plantilla/PlantillaFuncion/${plantilla}`;
        let url = environment.urlPlantillas + request;
        const response = await fetch(url);
        return await response.json();
    
    }


    async getPlantillasFunciones(funciones :Array<string>) : Promise<Array<Plantilla>> {
        let request = `/api/Plantilla/PlantillaFunciones?`;
        let datos  = ''
        for (let func of funciones) {
            datos += `funcion=${func}&`;
        }
        datos = datos.slice(0, -1); // Eliminar el último '&'

        let url = environment.urlPlantillas + request + datos;
        const response = await fetch(url);
        return await response.json();

    };

}