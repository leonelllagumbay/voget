import { environment } from './../../../environments/environment';
import { LabelEnum } from './../enum/label.enum';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalService {

  public CaseStatus: any;
  public CaseStatusRTD: any;
  languageSwitched = new Subject();
  titleDefined = new Subject();
  constructor() {

      this.CaseStatus = new Map();
      this.CaseStatus.set(10, LabelEnum.Status_New);
      this.CaseStatus.set(20, LabelEnum.Status_InProgress);
      this.CaseStatus.set(30, LabelEnum.Status_Rejected);
      this.CaseStatus.set(40, LabelEnum.Status_Cancelled);
      this.CaseStatus.set(50, LabelEnum.Status_Submitted);
      this.CaseStatus.set(60, LabelEnum.Status_Completed);

      this.CaseStatusRTD = new Map();
      this.CaseStatusRTD.set(-1, '-');
      this.CaseStatusRTD.set(0, LabelEnum.Status_RTD_Open);
      this.CaseStatusRTD.set(1, LabelEnum.Status_RTD_InProgress);
      this.CaseStatusRTD.set(2, LabelEnum.Status_RTD_Completed);
      this.CaseStatusRTD.set(3, LabelEnum.Status_RTD_Rejected);
      this.CaseStatusRTD.set(4, LabelEnum.Status_RTD_InProgress);
      this.CaseStatusRTD.set(6, LabelEnum.Status_RTD_Rejected);
  }

  public getCaseStatusLabel(statusCode: number) {
      return (this.CaseStatus.get(statusCode)) ? (this.CaseStatus.get(statusCode)) : LabelEnum.Status_New;
  }

  public getCaseStatusRTDLabel(statusRTDCode: number) {
      return (this.CaseStatusRTD.get(statusRTDCode)) ? (this.CaseStatusRTD.get(statusRTDCode)) : '-';
  }

  public getEnv() {
    return environment.endpoint;
  }

  public getDefaultLanguage() {
    return environment.browserLanguage;
  }

}
