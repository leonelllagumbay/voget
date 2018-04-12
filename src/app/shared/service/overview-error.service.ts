import { LabelEnum } from './../enum/label.enum';
import { ILanguage } from './../interface/ilanguage';
import { ErrorCodeOverviewK } from './../enum/error-code-overview-k.enum';
import { ErrorCodeDto } from './../dto/error-code-dto';
import { Injectable } from '@angular/core';

@Injectable()
export class OverviewErrorService {
  localizationResources: ILanguage;
  constructor() {
    this.localizationResources = LabelEnum;
   }

  convertOverviewError(errorCode: string, errorMsg: string = '', errorParams: any = {}): {} {

    const returnValue: ErrorCodeDto = {
        fe_code: '',
        fe_message: '',
        fe_params: ''
    };

    switch (errorCode) {
        case ErrorCodeOverviewK.E401:
            sessionStorage.clear();
            location.reload();
            break;
        case ErrorCodeOverviewK.E403:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.Error_403;
            break;
        case ErrorCodeOverviewK.E404:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.Error_Delete_404;
            break;
        case ErrorCodeOverviewK.E409:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.Error_Delete_409;
            break;
        case ErrorCodeOverviewK.E500:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.Error_Delete_500;
            break;
        case ErrorCodeOverviewK.VehicleChangeCaseNotFound:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.ErrorCode_VehicleChangeCaseNotFound;
            break;
        case ErrorCodeOverviewK.VehicleChangeCaseCannotBeDeleted:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.ErrorCode_VehicleChangeCaseCannotBeDeleted;
            break;
        case ErrorCodeOverviewK.VehicleChangeCaseCannotBeDeletedWrongDealer:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.ErrorCode_VehicleChangeCaseCannotBeDeletedWrongDealer;
            break;
        case ErrorCodeOverviewK.RegistrationCertificateCannotBeShown:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.ErrorCode_RegistrationCertificateCannotBeShown;
            break;
        case ErrorCodeOverviewK.AttachmentNotFound:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.ErrorCode_AttachmentNotFound;
            break;
        case ErrorCodeOverviewK.V09ResponseDataError:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.ErrorCode_V09ResponseDataError.concat(' ErrorCode: ').concat(errorCode);
            break;
        case ErrorCodeOverviewK.V09ResponseDataValidationError:
            returnValue.fe_code = errorCode;
            returnValue.fe_message =
              this.localizationResources.ErrorCode_V09ResponseDataValidationError.concat(' ErrorCode: ').concat(errorCode);
            break;
        case ErrorCodeOverviewK.V09ServiceError:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.ErrorCode_V09ServiceError.concat(' ErrorCode: ').concat(errorCode);
            break;
        case ErrorCodeOverviewK.V09ServiceNotAvailable:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = this.localizationResources.ErrorCode_V09ServiceNotAvailable.concat(' ErrorCode: ').concat(errorCode);
            break;
        default:
            returnValue.fe_code = errorCode;
            returnValue.fe_message = errorCode + ': ' + errorMsg;
            returnValue.fe_params = errorParams;
    }
    return returnValue;
}

}
