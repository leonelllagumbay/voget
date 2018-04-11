import { NewCompanyComponent } from './../egov/company-management/new-company/new-company.component';
import { NewUserComponent } from './../egov/user-management/new-user/new-user.component';
import { UserOverviewComponent } from './../egov/user-management/user-overview/user-overview.component';
import { ResetPasswordComponent } from './../egov/user-management/reset-password/reset-password.component';
import { ChangePasswordComponent } from './../egov/user-management/change-password/change-password.component';
import { BusinessRulesComponent } from './../egov/business-rules/business-rules.component';
import { ConfigurationSummaryComponent } from './../egov/configuration-summary/configuration-summary.component';
import {
  NewVehicleChangeCaseComponent
} from './../egov/vehicle-change-case/new-vehicle-change-case/new-vehicle-change-case.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
  VehicleChangeCaseOverviewComponent
} from './../egov/vehicle-change-case/vehicle-change-case-overview/vehicle-change-case-overview.component';
import { FileUploadTestComponent } from '../egov/file-upload-test/file-upload-test.component';
import { CompanyOverviewComponent } from '../egov/company-management/company-overview/company-overview.component';

const appRoutes: Routes = [{
  path: '',
  redirectTo: '/vehicleChangeCaseOverview',
  pathMatch: 'full'
}, {
  path: 'newVehicleChangeCase/:selectedCase',
  component: NewVehicleChangeCaseComponent
}, {
  path: 'vehicleChangeCaseOverview',
  component: VehicleChangeCaseOverviewComponent
}, {
  path: 'configurationSummary',
  component: ConfigurationSummaryComponent
}, {
  path: 'businessRules',
  component: BusinessRulesComponent
}, {
  path: 'changePassword',
  component: ChangePasswordComponent
}, {
  path: 'resetPassword',
  component: ResetPasswordComponent
}, {
  path: 'userOverview',
  component: UserOverviewComponent
}, {
  path: 'newUser/:selectedUser',
  component: NewUserComponent
}, {
  path: 'fileUploadTest',
  component: FileUploadTestComponent
}, {
  path: 'newCompany/:selectedCompany',
  component: NewCompanyComponent
}, {
  path: 'companyOverview',
  component: CompanyOverviewComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
