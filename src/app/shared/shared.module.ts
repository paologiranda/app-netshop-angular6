import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap';
import {ModalAddProductDashboardComponent} from
    '../components/dashboard/products-dashboard/modal-add-product-dashboard/modal-add-product-dashboard.component';
import {NgProgressModule} from 'ngx-progressbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    NgbModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgProgressModule
  ],
  providers: [
    BsModalRef
  ],
  entryComponents: [
    ModalAddProductDashboardComponent
  ]
})
export class SharedModule { }
