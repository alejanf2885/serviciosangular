import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable()
export class ServicePersonas {
  constructor(private _httpClient: HttpClient) {}

  getPersonas(): Observable<any> {
    let url = environment.urlPersonas;
    let request = 'api/personas';
    return this._httpClient.get<any>(url + request);
  }

  getPersonasPromise(): Promise<any> {
    let url = environment.urlPersonas;
     let request = 'api/personas';
    return new Promise((resolve) => {
        this._httpClient.get<any>(url + request).subscribe((response) => {
            resolve(response);
        });
    });
  }
}
