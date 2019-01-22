import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  headers: any;

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders().set('header-name', 'header-value');
    this.headers = this.headers.set('Content-Type', 'application/json');
  }

  get(url: string, params?: any) {
    if (params) {
      url = url + '/' + params;
    }
    return this.http.get(url, { headers: this.headers });
  }


}
