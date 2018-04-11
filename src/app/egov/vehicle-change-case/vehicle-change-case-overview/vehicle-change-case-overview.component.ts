import { LabelEnum } from './../../../shared/enum/label.enum';
import { GlobalService } from './../../../shared/service/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-change-case-overview',
  templateUrl: './vehicle-change-case-overview.component.html',
  styleUrls: ['./vehicle-change-case-overview.component.scss']
})
export class VehicleChangeCaseOverviewComponent implements OnInit {
  language: string;
  pageTitle: string;
  constructor(private _egovService: GlobalService) { }

  ngOnInit() {
    this.language = 'en';
    this._egovService.languageSwitched.subscribe(
      (language: string) => {
        console.log('vvv', language);
        this.language = language;
      }
    );

    this._egovService.titleDefined.next(LabelEnum.Label_OverviewVehicleChangeCases);
  }

}
