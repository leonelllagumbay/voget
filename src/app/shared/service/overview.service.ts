import { VehicleChangeCaseDto } from './../dto/vehicle-change-case-dto';
import { AttachmentDto } from './../dto/attachment-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class OverviewService {

  constructor(private _egovService: GlobalService, private _http: HttpClient) { }

  public Delete(caseId: string): Observable<{}> {
    const url = `${this._egovService.getEnv()}/egov/api/VehicleChangeCase/` + caseId;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'dataType': 'json'
      })
    };
    return this._http.delete<any>(url, httpOptions);
  }

  public GetSavedAttachmentByCaseId(caseId: number) {
    const url = `${this._egovService.getEnv()}/egov/api/VehicleChangeCaseAttachment/` + caseId;
    return this._http.get<AttachmentDto[]>(`${this._egovService.getEnv()}${url}`, {});
  }

  public Get() {
    const url = `${this._egovService.getEnv()}/egov/api/VehicleChangeCase`;
    return this._http.get<VehicleChangeCaseDto[]>(url, {});
  }

}
