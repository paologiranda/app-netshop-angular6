import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ModalAddProductDashboardComponent} from './modal-add-product-dashboard/modal-add-product-dashboard.component';
import {RestService} from '../../../services/rest.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
  @Input() products;
  displayedColumns: string[] = ['name', 'price', 'is_present'];
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private rest: RestService,
    private translate: TranslateService) {}

  openModal(product) {
    const initialState = {
      product
    };
    this.bsModalRef = this.modalService.show(ModalAddProductDashboardComponent,
      {initialState,
        class: 'modal-lg'}
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  changeLang(language) {
    this.translate.use(language);
  }

  ngOnInit() { }
}
