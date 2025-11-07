import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../models/Persona';
import { ServicePersonas } from '../../service/service.persona';

@Component({
  selector: 'app-personasapi',
  standalone: false,
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css'],
})
export class PersonasapiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(private _service: ServicePersonas) {
  }

  ngOnInit(): void {
    // this._service.getPersonas().subscribe(response => {
    //   this.personas = response;
    // });

    this._service.getPersonasPromise().then((response) => {
      this.personas = response;
    });
  }
}
