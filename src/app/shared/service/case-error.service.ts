import { ErrorCodeCaseK } from './../enum/vehicle-change-case-code.enum';
import { ErrorCodeDto } from './../dto/error-code-dto';
import { Injectable } from '@angular/core';

@Injectable()
export class CaseErrorService {

  constructor() { }

  convertCaseError(errorCode: string, errorMsg: string = '', errorParams: any = {}): {} {

      const returnValue: ErrorCodeDto = {
          fe_code: '',
          fe_message: '',
          fe_params: ''
      };

      switch (errorCode) {
          // case ErrorCodeCaseK.E400:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.Error_400;
          //     break;
          // case ErrorCodeCaseK.E401:
          // // session timeout
          //     sessionStorage.clear();
          //     location.reload();
          //     break;
          // case ErrorCodeCaseK.E403:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.Error_403;
          //     break;
          // case ErrorCodeCaseK.E404:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.Error_404;
          //     break;
          // case ErrorCodeCaseK.E405:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.Error_405;
          //     break;
          // case ErrorCodeCaseK.E409:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.Error_409;
          //     break;
          // case ErrorCodeCaseK.E500:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.Error_500;
          //     break;
          // case ErrorCodeCaseK.E502:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.Error_502;
          //     break;
          // case ErrorCodeCaseK.E503:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.Error_503;
          //     break;
          // case ErrorCodeCaseK.Generic:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.ErrorCode_Generic;
          //     break;
          // case ErrorCodeCaseK.V09ResponseDataError:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.ErrorCode_V09ResponseDataError
          //         .concat(ErrorCodeCaseK.ErrorCodeDisplay).concat(errorCode);
          //     break;
          // case ErrorCodeCaseK.V09ResponseDataValidationError:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.ErrorCode_V09ResponseDataValidationError
          //     .concat(ErrorCodeCaseK.ErrorCodeDisplay).concat(errorCode);
          //     break;
          // case ErrorCodeCaseK.V09ServiceError:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.localizationResources.ErrorCode_V09ServiceError
          //     .concat(ErrorCodeCaseK.ErrorCodeDisplay).concat(errorCode);
          //     break;
          // case ErrorCodeCaseK.V09ServiceNotAvailable:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources
          // .ErrorCode_V09ServiceNotAvailable.concat(Viacar.eGov.BusinessServices.ErrorCodeCaseK.ErrorCodeDisplay).concat(errorCode);
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.AttachmentTypeNotAllowed:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_AttachmentTypeNotAllowed;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.FileTooBig:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_FileTooBig;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.VehicleChangeCaseNotFound:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_VehicleChangeCaseNotFound;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.VehicleChangeCaseHasWrongStatus:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_VehicleChangeCaseHasWrongStatus;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.VehicleChangeCaseCannotBeEditedWrongDealer:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_VehicleChangeCaseCannotBeEditedWrongDealer;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.TooManyAttachments:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_TooManyAttachments;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.AttachmentNotFound:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_AttachmentNotFound;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.AttachmentCannotBeDeleted:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_AttachmentCannotBeDeleted;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.AttachmentCannotBeDeletedWrongDealer:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_AttachmentCannotBeDeletedWrongDealer;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.ActiveDirectoryUserNotFound:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_ActiveDirectoryUserNotFound;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.BusinessRuleError:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_BusinessRuleError;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.TextTooLong:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_TextTooLong;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.EmptyField:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_EmptyField;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.VehicleOutOfCirculationAlreadyInAnotherSubmittedCase:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources
          //     .ErrorCode_VehicleOutOfCirculationAlreadyInAnotherSubmittedCase;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.VehicleIntoCirculationAlreadyInAnotherSubmittedCase:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources
          // .ErrorCode_VehicleIntoCirculationAlreadyInAnotherSubmittedCase;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.Attachment_400:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_Attachment_400;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.Attachment_409:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_Attachment_409;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.Attachment_Warning:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.Error_Attachment_Warning;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.VehicleChangeCaseConfigurationInvalidInputModel:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_VehicleChangeCaseConfigurationInvalidInputModel;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.VehicleChangeCaseConfigurationNotFound:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_VehicleChangeCaseConfigurationNotFound;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.VehicleChangeCaseConfigurationWrongCanton:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_VehicleChangeCaseConfigurationWrongCanton;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.BusinessRuleSettingsNotFound:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_BusinessRuleSettingsNotFound;
          //     break;
          // case Viacar.eGov.BusinessServices.ErrorCodeCaseK.BusinessRuleSettingsWrongCanton:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = this.$rootScope.localizationResources.ErrorCode_BusinessRuleSettingsWrongCanton;
          //     break;
          // default:
          //     returnValue.fe_code = errorCode;
          //     returnValue.fe_message = errorCode + ': ' + errorMsg;
          //     returnValue.fe_params = errorParams;
      }

      return returnValue;
  }

}
