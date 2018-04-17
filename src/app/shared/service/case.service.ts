import { VehicleChangeCaseSubmitResultDto } from './../dto/vehicle-change-case-submit-result-dto';
import { VehicleChangeCaseDraftDto } from './../dto/vehicle-change-case-draft-dto';
import { VehicleChangeCaseDto } from './../dto/vehicle-change-case-dto';
import { RtdLocationDto } from './../dto/rtd-location-dto';
import { NewVehicleSearchResultDto } from './../dto/new-vehicle-search-result-dto';
import { OldVehicleSearchResultDto } from './../dto/old-vehicle-search-result-dto';
import { VehicleChangeCaseConfigurationDto } from './../dto/vehicle-change-case-configuration-dto';
import { HttpResponse } from '@angular/common/http/src/response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CaseService {

  constructor(private _egovService: GlobalService, private _http: HttpClient) { }

  public DeleteChangeCaseAttachment(fileId: string) {
    const url = this._egovService.getEnv() + '/egov/api/VehicleChangeCaseAttachment/' + fileId;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'dataType': 'json'
      })
    };
    return this._http.delete<any[]>(url, httpOptions);
  }

  public UploadChangeCaseAttachment(data) {
    const url = this._egovService.getEnv() + '/egov/api/VehicleChangeCaseAttachment';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'dataType': 'json'
      })
    };
    return this._http.post<any>(url, data, httpOptions);
  }

  public GetSavedAttachmentByCaseId(caseId: number) {
    const url = this._egovService.getEnv() + '/egov/api/VehicleChangeCaseAttachment/' + caseId;
    return this._http.get<VehicleChangeCaseConfigurationDto[]>(url, {});
  }

  public GetVehicleOutOfCirculation(matriculationNr: number, chassisNr: string) {
    const url = this._egovService.getEnv() + '/egov/api/VehicleOutOfCirculation/' + matriculationNr + '/' + chassisNr;
    // OldVehicleSearchResultDto
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'dataType': 'json'
      })
    };
    return this._http.get<OldVehicleSearchResultDto[]>(url, httpOptions);
    // $.ajax({
    //   method: "GET",
    //   url: url,
    //   contentType: "application/json; charset=utf-8",
    //   dataType:"json",
    //   xhrFields: {
    //     withCredentials: true
    //   }
    // }).done((data: Viacar.eGov.Backend.Facade.OldVehicleSearchResultDto) => {
    //   if (callBack) callBack(data);
    // }).fail((e) => {
    //   if (e.status == 200) {
    //     if (callBack) callBack();
    //     return;
    //   }
    //   else {
    //     if (callBack) {
    //       var errorResult = new Viacar.eGov.Backend.Facade.OldVehicleSearchResultDto();
    //       errorResult.numberPlate = new Viacar.eGov.Backend.Facade.NumberPlateDto;
    //       errorResult.vehicle = new Viacar.eGov.Backend.Facade.VehicleDto;
    //       errorResult.vehicleOwner = new Viacar.eGov.Backend.Facade.OldVehicleOwnerDto;
    //       errorResult.validationResult = new Viacar.eGov.Backend.Facade.ValidationResultDto();
    //       errorResult.validationResult.type = "Error";
    //       errorResult.validationResult.code = e.status.toString();
    //       if(e.responseJSON != undefined && e.responseJSON.code != undefined) {
    //         errorResult.validationResult.code = e.responseJSON.code.toString();
    //       }
    //       callBack(errorResult);
    //     }
    //   }

    //   if (this.OnError !== undefined && e.responseJSON) {
    //     this.OnError(e.responseText);
    //   } else {
    //     var jsonError = JSON.stringify({
    //       code: e.status.toString()
    //     })
    //     this.OnError(jsonError);
    //   }
    // });
  }

  public GetVehicleInToCirculation(matriculationNr2: number, chassisNr2: string, matriculationNr1: number, chassisNr1: string) {
    const url = this._egovService.getEnv() + '/egov/api/VehicleInToCirculation/'
        + matriculationNr2 + '/' + chassisNr2 + '/' + matriculationNr1 + '/' + chassisNr1;
    // NewVehicleSearchResultDto
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'dataType': 'json'
      })
    };
    return this._http.get<NewVehicleSearchResultDto[]>(url, httpOptions);
  }

  public GetRtdLocation() {
    const url = this._egovService.getEnv() + '/egov/api/RtdLocation';
    // RtdLocationDto
    return this._http.get<RtdLocationDto[]>(url);
  }

  public GetVehicleChangeCaseConfiguration() {
    const url = this._egovService.getEnv() + '/egov/api/VehicleChangeCaseConfiguration';
    // VehicleChangeCaseConfigurationDto
    return this._http.get<VehicleChangeCaseConfigurationDto[]>(url);
  }

  public GetVehicleChangeCase(caseId: number) {
    const url = this._egovService.getEnv() + '/egov/api/VehicleChangeCase/' + caseId;
    // VehicleChangeCaseDto
    return this._http.get<VehicleChangeCaseDto[]>(url);
  }

  public SubmitPut(dto: VehicleChangeCaseDraftDto) {
    const url = this._egovService.getEnv() + '/egov/api/VehicleChangeCase/Submit';
    // VehicleChangeCaseSubmitResultDto
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'dataType': 'json'
      })
    };
    return this._http.put<VehicleChangeCaseSubmitResultDto>(url, dto, httpOptions);
  }

  public Submit(dto: VehicleChangeCaseDraftDto) {
    const url = this._egovService.getEnv() + '/egov/api/VehicleChangeCase/Submit';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'dataType': 'json'
      })
    };
    // VehicleChangeCaseSubmitResultDto
    return this._http.post<VehicleChangeCaseSubmitResultDto>(url, dto, httpOptions);
  }

  public Put(dto: VehicleChangeCaseDraftDto) {
    const url = this._egovService.getEnv() + '/egov/api/VehicleChangeCase';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'dataType': 'json'
      })
    };
    // VehicleChangeCaseDto
    return this._http.put<VehicleChangeCaseDto>(url, dto, httpOptions);
  }

  public Post(dto: VehicleChangeCaseDraftDto) {
    const url = this._egovService.getEnv() + '/egov/api/VehicleChangeCase';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'dataType': 'json'
      })
    };
    // VehicleChangeCaseDto
    return this._http.post<VehicleChangeCaseDto>(url, dto, httpOptions);
  }

}
