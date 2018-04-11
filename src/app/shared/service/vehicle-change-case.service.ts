import { Injectable } from '@angular/core';

@Injectable()
export class VehicleChangeCaseService {

  constructor(onError?: (msg: string, error?: any) => void, serverBaseUrl?: string) {
    this.ServerBaseUrl = serverBaseUrl;
    this.OnError = onError;

    if (this.OnError === undefined) {
      this.OnError = (m: string) => alert(m);
    }
    if (this.ServerBaseUrl === undefined) {
      this.ServerBaseUrl = window.location.origin;
    }
  }

  public ServerBaseUrl: string;
  public OnError: (msg: string, error?: any) => void;
  private GetErrorMessage(e: any): string {
    let errMsg = e.status;
    if (e.responseJSON !== undefined) {
      errMsg = e.responseJSON.code;
    }
    return errMsg;
  }

}
