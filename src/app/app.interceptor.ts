import { GlobalService } from './shared/service/global.service';

import { Injectable, Inject, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpResponse,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EGovInterceptor implements HttpInterceptor {
    componentFactoryResolver: any;
    appRootService: any;
    rootViewContainer: any;
    request_count = 0;

    constructor(@Inject(ComponentFactoryResolver) componentFactoryResolver, private _egovService: GlobalService) {
        this.componentFactoryResolver = componentFactoryResolver;
    }

    loadSpinnerComponent(loading_message: string) {
        if (this.getRequestCount() !== 1) { // Alternative way to check if the loader already exist
            return true;
        }
    }

    clearSpinnerComponent() {
        // const viewContainerRef = this.appRootService.rootViewContainer;
        // viewContainerRef.clear();
    }

    addHttpRequestCount() {
        this.request_count += 1;
    }

    subtractHttpRequestCount() {
        if (this.request_count > 0) {
            this.request_count -= 1;
        }
    }

    getRequestCount(): number {
        return this.request_count;
    }

    openErrorDialog(err_title: string, err_message: string): void {

    }


    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Swallow loading for these urls
        const matchUnitOrFloor = request.url.match(/unit\/floor.\w+\/landlord\/v1/g);

        if (matchUnitOrFloor) {
            return next.handle(request);
        }

        this.addHttpRequestCount();
        // let loader_message = '';
        if (request.method === 'GET') {
            // Loading...
        } else if (request.method === 'DELETE') {
            // loader_message = 'Deleting...';
        } else { // PUT, POST, and others
            // loader_message = 'Submitting...';
        }

        request = request.clone({
            withCredentials: true
        });

        // this.loadSpinnerComponent(loader_message);
        return next.handle(request)
            .do((ev: HttpEvent<any>) => {
                console.log('http success', ev);
                if (ev instanceof HttpResponse) {
                    this.subtractHttpRequestCount();
                    if (this.getRequestCount() === 0) {
                        this.clearSpinnerComponent();
                    }
                }
            })
            .catch(er => {
                console.log('er interceptor', er);
                if (er instanceof HttpErrorResponse) {

                    // Notify listeners for the error
                    this._egovService.errorDefined.next(er);

                    // this.subtractHttpRequestCount();
                    // if (this.getRequestCount() === 0) {
                    //     this.clearSpinnerComponent();
                    // }
                }
                return Observable.throw(er);
            });
    }
}
