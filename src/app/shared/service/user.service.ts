import { UserOverviewDto } from './../dto/user-overview-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from './global.service';
import { UserDto } from './../dto/user-dto';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http/src/response';

@Injectable()
export class UserService {

  constructor(private _egovService: GlobalService, private _http: HttpClient) { }

  public OnError(msg: string, error?: any) {
    console.log('on errorsss  ', msg, error);
  }

  getUser(url ?: string): Observable<{}> {
      console.log('get user sample');
      if (!url) {
        url = '/egov/api/User';
      }
      return this._http.get<UserDto>(`${this._egovService.getEnv()}${url}`, {});
  }

}
