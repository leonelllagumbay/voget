import { GlobalService } from './../service/global.service';
import { TranslateService } from '@ngx-translate/core';
import { NewVehicleChangeCaseComponent } from './../../egov/vehicle-change-case/new-vehicle-change-case/new-vehicle-change-case.component';
import { LabelEnum } from './../enum/label.enum';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router/src/interfaces';
import { ILanguage } from '../interface/ilanguage';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class CanUserNavigateAwayService implements CanDeactivate<{}> {
  localizationResources: ILanguage;
  constructor(private _translate: TranslateService, private _egovService: GlobalService) {
    this.localizationResources = LabelEnum;
  }

  canDeactivate(
    component: NewVehicleChangeCaseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('is submitterd', this._egovService.isSubmitted);
    if (this._egovService.isSubmitted) { // Bypass can deactivate
      return true;
    }
    return confirm(this._egovService.getConfirmText());
  }
}

