import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import * as _ from 'lodash';
import {NgProgress} from 'ngx-progressbar';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  private requests: Array<any> = [];
  private whiteList: Array<string> = [
    'todos'
  ];

  constructor(private toastSvc: ToastrService, public ngProgress: NgProgress) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ngProgress.start();
    this.requests.push(request);

    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.status !== 200) {
              let isPresent = false;
              for (let z = 0; z < this.whiteList.length; z++) {
                isPresent = _.includes(event.url, this.whiteList[z]);
                if (isPresent === true) {
                  break;
                }
              }
              if (isPresent === false) {
                const _err = event.status + ' - ' + event.statusText;
                this.popToast(_err);
              }
            }

            this.removeRequest(request);
          }
        }, err => {
          this.removeRequest(request);
          const _err = err.status + ' - ' + err.statusText;
          this.popToast(_err);
        })
      );
  }

  removeRequest(req) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }

    this.ngProgress.inc(1);
    if (this.requests.length === 0) {
      this.ngProgress.done();
    }

  }

  popToast(status) {
    this.toastSvc.error('error: ' + status);
  }

}
