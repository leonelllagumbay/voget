import { CaseService } from './../shared/service/case.service';
import { CaseErrorService } from './../shared/service/case-error.service';
import { OverviewErrorService } from './../shared/service/overview-error.service';
import { OverviewService } from './../shared/service/overview.service';
import { GlobalService } from './../shared/service/global.service';
import { UserService } from './../shared/service/user.service';
import { ErrorHandlerService } from './../shared/service/error-handler.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './../app-routing/app-routing.module';
import { CompanyOverviewComponent } from './company-management/company-overview/company-overview.component';
import { NewCompanyComponent } from './company-management/new-company/new-company.component';
import { FileUploadTestComponent } from './file-upload-test/file-upload-test.component';
import { NewUserComponent } from './user-management/new-user/new-user.component';
import { UserOverviewComponent } from './user-management/user-overview/user-overview.component';
import { ChangePasswordComponent } from './user-management/change-password/change-password.component';
import { BusinessRulesComponent } from './business-rules/business-rules.component';
import { NewVehicleChangeCaseComponent } from './vehicle-change-case/new-vehicle-change-case/new-vehicle-change-case.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  VehicleChangeCaseOverviewComponent
} from './vehicle-change-case/vehicle-change-case-overview/vehicle-change-case-overview.component';
import { DataTablesModule } from 'angular-datatables';
import { ConfigurationSummaryComponent } from './configuration-summary/configuration-summary.component';
import { ResetPasswordComponent } from './user-management/reset-password/reset-password.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
     }
    }),
  ],
  exports: [
    VehicleChangeCaseOverviewComponent,
    NavBarComponent
  ],
  declarations: [
    VehicleChangeCaseOverviewComponent,
    NewVehicleChangeCaseComponent,
    ConfigurationSummaryComponent,
    BusinessRulesComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    UserOverviewComponent,
    NewUserComponent,
    FileUploadTestComponent,
    NewCompanyComponent,
    CompanyOverviewComponent,
    NavBarComponent
  ],
  providers: [ErrorHandlerService, UserService, GlobalService, OverviewService,
              OverviewErrorService, CaseErrorService, CaseService
  ]
})
export class EgovModule { }
