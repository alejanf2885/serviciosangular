import { Component, OnInit } from '@angular/core';
import { ServiceCoche } from '../../service/service.coche';
import { Coche } from '../../../models/Coche';

@Component({
  selector: 'app-coches',
  standalone: false,
  templateUrl: './coches-components.html',
  styleUrl: './coches-components.css',
})
export class CochesComponents implements OnInit {

  public coches! : Array<Coche>;

  constructor(private _serviceCoche: ServiceCoche) {}

  ngOnInit(): void {
     this._serviceCoche.getCoches().then((data) => {
      this.coches = data;
    });
  }
}
