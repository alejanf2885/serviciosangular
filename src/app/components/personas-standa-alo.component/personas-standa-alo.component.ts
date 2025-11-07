import { Component } from '@angular/core';
import { Persona } from '../../../models/Persona';

@Component({
  selector: 'app-personas-standa-alo',
  standalone: true,
  templateUrl: './personas-standa-alo.component.html',
  styleUrl: './personas-standa-alo.component.css',
})
export class PersonasStandaAloComponent {
  public personas!: Array<Persona>;

  constructor() {
    this.personas = [
      new Persona(1, 'Lopezaaa', 'ale@gmail.com', 28),
      new Persona(2, 'Martinez', 'mar@gmail.com', 34),
      new Persona(3, 'Gomez', 'gom@gmail.com', 45),
    ];
  }
}
