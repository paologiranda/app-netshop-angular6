import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor() { }

  getAllProducts(): Observable<any> {
    return null;
  }

  saveProduct(product): Observable<any> {
    return null;
  }

  updateProduct(product): Observable<any> {
    return null;
  }
}
