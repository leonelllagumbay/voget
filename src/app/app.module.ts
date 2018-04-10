export function HttpLoaderFactory(http: HttpClient) {
  console.log('factory');
  return new TranslateHttpLoader(http);
}

import { EgovModule } from './egov/egov.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EgovModule,
    SharedModule,
   NgbModule.forRoot(),
   HttpClientModule,
   TranslateModule.forRoot({
     loader: {
       provide: TranslateLoader,
       useFactory: HttpLoaderFactory,
       deps: [HttpClient]
     }
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
