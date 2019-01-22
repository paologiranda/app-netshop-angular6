import {Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard/dashboard.service';
import {Product} from '../../interfaces/product';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public products: Product[];
  private productsA;
  private productsB;
  constructor(private dashSvc: DashboardService, private rest: RestService) {
    this.products = [];
  }

  loadProduct() {
    this.rest.get('/todosssss/1')
      .subscribe( res => {
        this.productsA = res;
      });
  }
  loadAllProduct() {
    this.rest.get('/todoss/')
      .subscribe( res => {
        this.productsA = res;
      });
  }

  loadState() {
    this.rest.get('/state/get/IND/all')
      .subscribe( res => {
        this.productsB = res;
      });

  }

  ngOnInit() {
    this.loadProduct();
    this.loadState();
    this.loadProduct();
    this.loadState();
    this.loadProduct();
    this.loadState();
    this.loadProduct();
    this.loadState();
    this.loadAllProduct();
    this.loadAllProduct()
    this.loadAllProduct()
    this.loadAllProduct()
    this.loadAllProduct()}

}
