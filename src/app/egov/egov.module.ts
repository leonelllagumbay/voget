import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleChangeCaseOverviewComponent } from './vehicle-change-case-overview/vehicle-change-case-overview.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [
    VehicleChangeCaseOverviewComponent
  ],
  declarations: [VehicleChangeCaseOverviewComponent]
})
export class EgovModule { }
