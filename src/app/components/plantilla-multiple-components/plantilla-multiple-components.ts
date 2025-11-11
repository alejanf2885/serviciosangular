import { Component, OnInit } from '@angular/core';
import { Plantilla } from '../../../models/Plantilla';
import { ServicePlantillas } from '../../service/service.plantillas';

@Component({
  selector: 'app-plantilla-multiple',
  standalone: false,
  templateUrl: './plantilla-multiple-components.html',
  styleUrl: './plantilla-multiple-components.css',
})
export class PlantillaMultipleComponents implements OnInit {
  public plantillas!: Array<string>;
    public plantillasData!: Array<Plantilla>;
    public plantillasSeleccionadas: Array<string> = [];
  
    constructor(private _service: ServicePlantillas) {}
  
    ngOnInit(): void {
      this._service.getPlantillas().then((data) => {
        this.plantillas = data;
      });
    }
  
    searchPlantilla() {
      if (this.plantillasSeleccionadas && this.plantillasSeleccionadas.length > 0) {
        this._service.getPlantillasFunciones(this.plantillasSeleccionadas).then((data) => {
          this.plantillasData = data; 
        });
      }
    }
}
