import { Component, OnInit } from '@angular/core';
import { ServicePlantillas } from '../../service/service.plantillas';
import { Plantilla } from '../../../models/Plantilla';

@Component({
  selector: 'app-plantilla',
  standalone: false,
  templateUrl: './plantilla-components.html',
  styleUrls: ['./plantilla-components.css'],
})
export class PlantillaComponents implements OnInit {
  public plantillas!: Array<string>;
  public plantillasData!: Array<Plantilla>;
  public plantillaSeleccionada: string = '';

  constructor(private _service: ServicePlantillas) {}

  ngOnInit(): void {
    this._service.getPlantillas().then((data) => {
      this.plantillas = data;
    });
  }

  searchPlantilla() {
    if (this.plantillaSeleccionada) {
      this._service.searchPlantilla(this.plantillaSeleccionada).then((data) => {
        this.plantillasData = data; 
      });
    }
  }
}
