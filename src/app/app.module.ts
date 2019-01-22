import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {Router} from '@angular/router';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {ProductsDashboardComponent} from './components/dashboard/products-dashboard/products-dashboard.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ModalAddProductDashboardComponent } from
    './components/dashboard/products-dashboard/modal-add-product-dashboard/modal-add-product-dashboard.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {SharedModule} from './shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpConfigInterceptor} from './services/httpInterceptor';
import {ToastrModule} from 'ngx-toastr';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ProductsDashboardComponent,
    ModalAddProductDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    SharedModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router, private translate: TranslateService) {
    this.router.navigate(['']);
    translate.setDefaultLang('en_EN');
    translate.use('en_EN');
  }
}
