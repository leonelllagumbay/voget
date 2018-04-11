import { LabelEnum } from './../enum/label.enum';
import { ErrorCodeK } from './../enum/error-code.enum';
import { ErrorCodeDto } from './../dto/error-code-dto';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlerService {
  constructor() {
  }

  public beautifyErrorCode(errBE: any) {
      if (errBE.code !== undefined && errBE.code !== '') {
          // do nothing here
      } else if (errBE[0]) {
          errBE = errBE[0];
      } else if (errBE && errBE.error) {
          if (errBE.error.message) {
              errBE.code = errBE.error['code'];
              errBE.text = errBE.error.message;
          } else {
              errBE.text = errBE.error.text;
          }
      }
      return errBE;
  }

  public convertError(errorCode: string, errorMsg: string = '', errorParams: any = {}): {} {

      const returnValue: ErrorCodeDto = {
          fe_code: '',
          fe_message: '',
          fe_params: ''
      };

      switch (errorCode) {
          case ErrorCodeK.E401:
          // session timeout
              sessionStorage.clear();
              location.reload();
              break;
          case ErrorCodeK.E403:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.Error_403;
              break;
          case ErrorCodeK.E404:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.Error_404;
              break;
          case ErrorCodeK.E409:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.Error_409;
              break;
          case ErrorCodeK.E500:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.Error_500;
              break;
          case ErrorCodeK.ActiveDirectoryNewUserIsNotAcceptable:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryNewUserIsNotAcceptable;
              break;
          case ErrorCodeK.ActiveDirectoryNewPasswordIsNotAcceptable:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryNewPasswordIsNotAcceptable;
              break;
          case ErrorCodeK.ActiveDirectoryUserAlreadyExists:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryUserAlreadyExists;
              break;
          case ErrorCodeK.ActiveDirectoryDealerNotFound:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryDealerNotFound;
              break;
          case ErrorCodeK.ActiveDirectoryDealerIsFromAnotherCanton:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryDealerIsFromAnotherCanton;
              break;
          case ErrorCodeK.ActiveDirectoryNewUserWasNotCreated:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryNewUserWasNotCreated;
              break;
          case ErrorCodeK.ActiveDirectoryNewDealerInvalidInputModel:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryNewDealerInvalidInputModel;
              break;
          case ErrorCodeK.ActiveDirectoryDealerAlreadyExists:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryDealerAlreadyExists;
              break;
          case ErrorCodeK.ActiveDirectoryNewDealerWasNotCreated:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryNewDealerWasNotCreated;
              break;
          case ErrorCodeK.ActiveDirectoryChangePasswordIsNotAcceptable:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryChangePasswordIsNotAcceptable;
              break;
          case ErrorCodeK.ActiveDirectoryNewPasswordsNotIdentical:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryNewPasswordsNotIdentical;
              break;
          case ErrorCodeK.ActiveDirectoryCurrentAndNewPasswordsAreIdentical:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryCurrentAndNewPasswordsAreIdentical;
              break;
          case ErrorCodeK.ActiveDirectoryPasswordWasNotChanged:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryPasswordWasNotChanged;
              break;
          case ErrorCodeK.ActiveDirectoryChangePasswordInvalidInputModel:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_ActiveDirectoryChangePasswordInvalidInputModel;
              break;
          case ErrorCodeK.V09ResponseDataError:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_V09ResponseDataError.concat(' ErrorCode: ').concat(errorCode);
              break;
          case ErrorCodeK.V09ResponseDataValidationError:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_V09ResponseDataValidationError.concat(' ErrorCode: ').concat(errorCode);
              break;
          case ErrorCodeK.V09ServiceError:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_V09ServiceError.concat(' ErrorCode: ').concat(errorCode);
              break;
          case ErrorCodeK.V09ServiceNotAvailable:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = LabelEnum.ErrorCode_V09ServiceNotAvailable.concat(' ErrorCode: ').concat(errorCode);
              break;
          default:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = errorCode + ': ' + errorMsg;
              returnValue.fe_params = errorParams;
      }

      return returnValue;
  }

}
