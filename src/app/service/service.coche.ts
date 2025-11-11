import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Coche } from '../../models/Coche';

@Injectable()
export class ServiceCoche {
  constructor() {}

  async getCoches(): Promise<Array<Coche>> {
    let request = 'webresources/coches';
    let url = environment.urlCoches + request;
    const response = await fetch(url);
    return await response.json();
  }
}
