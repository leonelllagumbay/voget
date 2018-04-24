import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConfigurationSummaryComponent } from './../../egov/configuration-summary/configuration-summary.component';
import { GlobalService } from './../service/global.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CanUserNavigateAwayConfService implements CanDeactivate<{}> {
  constructor(private _egovService: GlobalService) {
  }

  canDeactivate(
    component: ConfigurationSummaryComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return confirm(this._egovService.getConfirmText());
  }

}
