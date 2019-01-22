import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../../interfaces/product';
import {DashboardService} from '../../../../services/dashboard/dashboard.service';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-modal-add-product-dashboard',
  templateUrl: './modal-add-product-dashboard.component.html',
  styleUrls: ['./modal-add-product-dashboard.component.scss']
})
export class ModalAddProductDashboardComponent implements OnInit {

  addProductForm: FormGroup;
  public product: Product;

  constructor(public bsModalRef: BsModalRef,
              private fb: FormBuilder,
              private dasbSvc: DashboardService) { }

  saveProduct() {
    this.product = this.addProductForm.value;
    this.product.is_present = this.addProductForm.value.is_present === 'yes';
    this.dasbSvc.saveProduct(this.product)
      .subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      name: [this.product ? this.product.name : '', Validators.required],
      price: [this.product ? this.product.price : '', Validators.required],
      is_present: [this.product && this.product.is_present === true ? 'yes' :
                    this.product && this.product.is_present === false ? 'no' : '', Validators.required]
    });
  }

}
