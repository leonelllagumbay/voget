import { IGeneralError } from './../interface/igeneralerror';
import { BusinessRuleEnum } from './../enum/business-rule.enum';
import { ValidationResultDto } from './../dto/validation-result-dto';
import { LabelEnum } from './../enum/label.enum';
import { ILanguage } from './../interface/ilanguage';
import { ErrorCodeCaseK } from './../enum/vehicle-change-case-code.enum';
import { ErrorCodeDto } from './../dto/error-code-dto';
import { Injectable } from '@angular/core';

@Injectable()
export class CaseErrorService {
  localizationResources: ILanguage;
  constructor() {
    this.localizationResources = LabelEnum;
  }

  convertCaseError(errorCode: string, errorMsg: string = '', errorParams: any = {}): {} {

      const returnValue: ErrorCodeDto = {
          fe_code: '',
          fe_message: '',
          fe_params: ''
      };

      switch (errorCode) {
          case ErrorCodeCaseK.E400:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.Error_400;
              break;
          case ErrorCodeCaseK.E401:
              sessionStorage.clear();
              location.reload();
              break;
          case ErrorCodeCaseK.E403:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.Error_403;
              break;
          case ErrorCodeCaseK.E404:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.Error_404;
              break;
          case ErrorCodeCaseK.E405:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.Error_405;
              break;
          case ErrorCodeCaseK.E409:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.Error_409;
              break;
          case ErrorCodeCaseK.E500:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.Error_500;
              break;
          case ErrorCodeCaseK.E502:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.Error_502;
              break;
          case ErrorCodeCaseK.E503:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.Error_503;
              break;
          case ErrorCodeCaseK.Generic:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_Generic;
              break;
          case ErrorCodeCaseK.V09ResponseDataError:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_V09ResponseDataError
                  .concat(ErrorCodeCaseK.ErrorCodeDisplay).concat(errorCode);
              break;
          case ErrorCodeCaseK.V09ResponseDataValidationError:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_V09ResponseDataValidationError
              .concat(ErrorCodeCaseK.ErrorCodeDisplay).concat(errorCode);
              break;
          case ErrorCodeCaseK.V09ServiceError:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_V09ServiceError
              .concat(ErrorCodeCaseK.ErrorCodeDisplay).concat(errorCode);
              break;
          case ErrorCodeCaseK.V09ServiceNotAvailable:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources
          .ErrorCode_V09ServiceNotAvailable.concat(ErrorCodeCaseK.ErrorCodeDisplay).concat(errorCode);
              break;
          case ErrorCodeCaseK.AttachmentTypeNotAllowed:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_AttachmentTypeNotAllowed;
              break;
          case ErrorCodeCaseK.FileTooBig:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_FileTooBig;
              break;
          case ErrorCodeCaseK.VehicleChangeCaseNotFound:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_VehicleChangeCaseNotFound;
              break;
          case ErrorCodeCaseK.VehicleChangeCaseHasWrongStatus:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_VehicleChangeCaseHasWrongStatus;
              break;
          case ErrorCodeCaseK.VehicleChangeCaseCannotBeEditedWrongDealer:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_VehicleChangeCaseCannotBeEditedWrongDealer;
              break;
          case ErrorCodeCaseK.TooManyAttachments:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_TooManyAttachments;
              break;
          case ErrorCodeCaseK.AttachmentNotFound:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_AttachmentNotFound;
              break;
          case ErrorCodeCaseK.AttachmentCannotBeDeleted:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_AttachmentCannotBeDeleted;
              break;
          case ErrorCodeCaseK.AttachmentCannotBeDeletedWrongDealer:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_AttachmentCannotBeDeletedWrongDealer;
              break;
          case ErrorCodeCaseK.ActiveDirectoryUserNotFound:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_ActiveDirectoryUserNotFound;
              break;
          case ErrorCodeCaseK.BusinessRuleError:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_BusinessRuleError;
              break;
          case ErrorCodeCaseK.TextTooLong:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_TextTooLong;
              break;
          case ErrorCodeCaseK.EmptyField:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_EmptyField;
              break;
          case ErrorCodeCaseK.VehicleOutOfCirculationAlreadyInAnotherSubmittedCase:
                console.log('hereeeeeeee');
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources
                .ErrorCode_VehicleOutOfCirculationAlreadyInAnotherSubmittedCase;
              break;
          case ErrorCodeCaseK.VehicleIntoCirculationAlreadyInAnotherSubmittedCase:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources
                    .ErrorCode_VehicleIntoCirculationAlreadyInAnotherSubmittedCase;
              break;
          case ErrorCodeCaseK.Attachment_400:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_Attachment_400;
              break;
          case ErrorCodeCaseK.Attachment_409:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_Attachment_409;
              break;
          case ErrorCodeCaseK.Attachment_Warning:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.Error_Attachment_Warning;
              break;
          case ErrorCodeCaseK.VehicleChangeCaseConfigurationInvalidInputModel:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_VehicleChangeCaseConfigurationInvalidInputModel;
              break;
          case ErrorCodeCaseK.VehicleChangeCaseConfigurationNotFound:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_VehicleChangeCaseConfigurationNotFound;
              break;
          case ErrorCodeCaseK.VehicleChangeCaseConfigurationWrongCanton:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_VehicleChangeCaseConfigurationWrongCanton;
              break;
          case ErrorCodeCaseK.BusinessRuleSettingsNotFound:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_BusinessRuleSettingsNotFound;
              break;
          case ErrorCodeCaseK.BusinessRuleSettingsWrongCanton:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = this.localizationResources.ErrorCode_BusinessRuleSettingsWrongCanton;
              break;
          default:
              returnValue.fe_code = errorCode;
              returnValue.fe_message = errorCode + ': ' + errorMsg;
              returnValue.fe_params = errorParams;
      }

      return returnValue;
  }

  ObjectMapper(objectName: string) {
    let objectTranslation = '';
    if (objectName === 'eic.OwnerName') {
        objectTranslation = this.localizationResources.Object_Eic_OwnerName;
    } else if (objectName === 'owner.Name') {
        objectTranslation = this.localizationResources.Object_Owner_Name;
    } else if (objectName === 'eic.OwnerFirstname') {
        objectTranslation = this.localizationResources.Object_Eic_OwnerFirstname;
    } else if (objectName === 'owner.Firstname') {
        objectTranslation = this.localizationResources.Object_Owner_Firstname;
    } else if (objectName === 'eic.DateOfBirth') {
        objectTranslation = this.localizationResources.Object_Eic_DateOfBirth;
    } else if (objectName === 'owner.DateOfBirth') {
        objectTranslation = this.localizationResources.Object_Owner_DateOfBirth;
    } else if (objectName === 'numberPlate.InsuranceId') {
        objectTranslation = this.localizationResources.Object_NumberPlate_InsuranceId;
    } else if (objectName === ' eic.InsuranceId') {
        objectTranslation = this.localizationResources.Object_Eic_InsuranceId;
    } else if (objectName === 'vehicle.VehicleType') {
        objectTranslation = this.localizationResources.Object_Vehicle_VehicleType;
    } else if (objectName === 'eic.VehicleType') {
        objectTranslation = this.localizationResources.Object_Eic_VehicleType;
    } else {
      objectTranslation = objectName;
    }
    return objectTranslation;
  }

  public mapError(validationResult: ValidationResultDto, OldVehicleInfo: boolean, NewVehicleSearchInfo: boolean): IGeneralError {

    let errorMessage = '';
    let errorCode = '';
    const parameters: Array<{label: string, value: string}> = [];

    if (validationResult && validationResult.errorCode) {
        errorCode = validationResult.errorCode;
        errorMessage = '';
    }

    if (validationResult !== undefined) {
        if (validationResult.parameters !== undefined && validationResult.parameters.length > 0) {
            for (let i = 0; i < validationResult.parameters.length; i++) {
                const obj1 = validationResult.parameters[i].name;
                const objTrans1 = this.ObjectMapper(obj1);
                const val1 = validationResult.parameters[i].value;

                parameters.push({
                    label: objTrans1,
                    value: val1
                });
            }
        }
    }

    switch (errorCode) {
        case 'BR1': errorMessage = this.localizationResources.ErrorCode_br1; break;
        case 'BR100': errorMessage = this.localizationResources.ErrorCode_br100; break;
        case 'BR101': errorMessage = this.localizationResources.ErrorCode_br101; break;
        case 'BR102': errorMessage = this.localizationResources.ErrorCode_br102; break;
        case 'BR103': errorMessage = this.localizationResources.ErrorCode_br103; break;
        case 'BR104': errorMessage = this.localizationResources.ErrorCode_br104; break;
        case 'BR105': errorMessage = this.localizationResources.ErrorCode_br105; break;
        case 'BR106': errorMessage = this.localizationResources.ErrorCode_br106; break;
        case 'BR107': errorMessage = this.localizationResources.ErrorCode_br107; break;
        case 'BR108': errorMessage = this.localizationResources.ErrorCode_br108; break;
        case 'BR109': errorMessage = this.localizationResources.ErrorCode_br109; break;
        case 'BR11': errorMessage = this.localizationResources.ErrorCode_br11; break;
        case 'BR110': errorMessage = this.localizationResources.ErrorCode_br110; break;
        case 'BR116': errorMessage = this.localizationResources.ErrorCode_br116; break;
        case 'BR117': errorMessage = this.localizationResources.ErrorCode_br117; break;
        case 'BR119': errorMessage = this.localizationResources.ErrorCode_br119; break;
        case 'BR12': errorMessage = this.localizationResources.ErrorCode_br12; break;
        case 'BR120': errorMessage = this.localizationResources.ErrorCode_br120; break;
        case 'BR121': errorMessage = this.localizationResources.ErrorCode_br121; break;
        case 'BR123': errorMessage = this.localizationResources.ErrorCode_br123; break;
        case 'BR124': errorMessage = this.localizationResources.ErrorCode_br124; break;
        case 'BR126': errorMessage = this.localizationResources.ErrorCode_br126; break;
        case 'BR13': errorMessage = this.localizationResources.ErrorCode_br13; break;
        case 'BR131': errorMessage = this.localizationResources.ErrorCode_br131; break;
        case 'BR132': errorMessage = this.localizationResources.ErrorCode_br132; break;
        case 'BR135': errorMessage = this.localizationResources.ErrorCode_br135; break;
        case 'BR137': errorMessage = this.localizationResources.ErrorCode_br137; break;
        case 'BR139': errorMessage = this.localizationResources.ErrorCode_br139; break;
        case 'BR140': errorMessage = this.localizationResources.ErrorCode_br140; break;
        case 'BR141': errorMessage = this.localizationResources.ErrorCode_br141; break;
        case 'BR142': errorMessage = this.localizationResources.ErrorCode_br142; break;
        case 'BR143': errorMessage = this.localizationResources.ErrorCode_br143; break;
        case 'BR144': errorMessage = this.localizationResources.ErrorCode_br144; break;
        case 'BR145': errorMessage = this.localizationResources.ErrorCode_br145; break;
        case 'BR146': errorMessage = this.localizationResources.ErrorCode_br146; break;
        case 'BR147': errorMessage = this.localizationResources.ErrorCode_br147; break;
        case 'BR148': errorMessage = this.localizationResources.ErrorCode_br148; break;
        case 'BR149': errorMessage = this.localizationResources.ErrorCode_br149; break;
        case 'BR150': errorMessage = this.localizationResources.ErrorCode_br150; break;
        case 'BR151': errorMessage = this.localizationResources.ErrorCode_br151; break;
        case 'BR19': errorMessage = this.localizationResources.ErrorCode_br19; break;
        case 'BR20': errorMessage = this.localizationResources.ErrorCode_br20; break;
        case 'BR21': errorMessage = this.localizationResources.ErrorCode_br21; break;
        case 'BR23': errorMessage = this.localizationResources.ErrorCode_br23; break;
        case 'BR24': errorMessage = this.localizationResources.ErrorCode_br24; break;
        case 'BR25': errorMessage = this.localizationResources.ErrorCode_br25; break;
        case 'BR42': errorMessage = this.localizationResources.ErrorCode_br42; break;
        case 'BR43': errorMessage = this.localizationResources.ErrorCode_br43; break;
        case 'BR44': errorMessage = this.localizationResources.ErrorCode_br44; break;
        case 'BR45': errorMessage = this.localizationResources.ErrorCode_br45; break;
        case 'BR46': errorMessage = this.localizationResources.ErrorCode_br46; break;
        case 'BR47': errorMessage = this.localizationResources.ErrorCode_br47; break;
        case 'BR48': errorMessage = this.localizationResources.ErrorCode_br48; break;
        case 'BR50': errorMessage = this.localizationResources.ErrorCode_br50; break;
        case 'BR51': errorMessage = this.localizationResources.ErrorCode_br51; break;
        case 'BR52': errorMessage = this.localizationResources.ErrorCode_br52; break;
        case 'BR53': errorMessage = this.localizationResources.ErrorCode_br53; break;
        case 'BR54': errorMessage = this.localizationResources.ErrorCode_br54; break;
        case 'BR55': errorMessage = this.localizationResources.ErrorCode_br55; break;
        case 'BR56': errorMessage = this.localizationResources.ErrorCode_br56; break;
        case 'BR57': errorMessage = this.localizationResources.ErrorCode_br57; break;
        case 'BR58': errorMessage = this.localizationResources.ErrorCode_br58; break;
        case 'BR59': errorMessage = this.localizationResources.ErrorCode_br59; break;
        case 'BR6': errorMessage = this.localizationResources.ErrorCode_br6; break;
        case 'BR60': errorMessage = this.localizationResources.ErrorCode_br60; break;
        case 'BR61': errorMessage = this.localizationResources.ErrorCode_br61; break;
        case 'BR62': errorMessage = this.localizationResources.ErrorCode_br62; break;
        case 'BR63': errorMessage = this.localizationResources.ErrorCode_br63; break;
        case 'BR64': errorMessage = this.localizationResources.ErrorCode_br64; break;
        case 'BR65': errorMessage = this.localizationResources.ErrorCode_br65; break;
        case 'BR66': errorMessage = this.localizationResources.ErrorCode_br66; break;
        case 'BR67': errorMessage = this.localizationResources.ErrorCode_br67; break;
        case 'BR68': errorMessage = this.localizationResources.ErrorCode_br68; break;
        case 'BR69': errorMessage = this.localizationResources.ErrorCode_br69; break;
        case 'BR7': errorMessage = this.localizationResources.ErrorCode_br7; break;
        case 'BR70': errorMessage = this.localizationResources.ErrorCode_br70; break;
        case 'BR71': errorMessage = this.localizationResources.ErrorCode_br71; break;
        case 'BR72': errorMessage = this.localizationResources.ErrorCode_br72; break;
        case 'BR73': errorMessage = this.localizationResources.ErrorCode_br73; break;
        case 'BR74': errorMessage = this.localizationResources.ErrorCode_br74; break;
        case 'BR75': errorMessage = this.localizationResources.ErrorCode_br75; break;
        case 'BR76': errorMessage = this.localizationResources.ErrorCode_br76; break;
        case 'BR77': errorMessage = this.localizationResources.ErrorCode_br77; break;
        case 'BR78': errorMessage = this.localizationResources.ErrorCode_br78; break;
        case 'BR79': errorMessage = this.localizationResources.ErrorCode_br79; break;
        case 'BR8': errorMessage = this.localizationResources.ErrorCode_br8; break;
        case 'BR80': errorMessage = this.localizationResources.ErrorCode_br80; break;
        case 'BR81': errorMessage = this.localizationResources.ErrorCode_br81; break;
        case 'BR82': errorMessage = this.localizationResources.ErrorCode_br82; break;
        case 'BR83': errorMessage = this.localizationResources.ErrorCode_br83; break;
        case 'BR84': errorMessage = this.localizationResources.ErrorCode_br84; break;
        case 'BR85': errorMessage = this.localizationResources.ErrorCode_br85; break;
        case 'BR86': errorMessage = this.localizationResources.ErrorCode_br86; break;
        case 'BR87': errorMessage = this.localizationResources.ErrorCode_br87; break;
        case 'BR88': errorMessage = this.localizationResources.ErrorCode_br88; break;
        case 'BR89': errorMessage = this.localizationResources.ErrorCode_br89; break;
        case 'BR90': errorMessage = this.localizationResources.ErrorCode_br90; break;
        case 'BR91': errorMessage = this.localizationResources.ErrorCode_br91; break;
        case 'BR92': errorMessage = this.localizationResources.ErrorCode_br92; break;
        case 'BR93': errorMessage = this.localizationResources.ErrorCode_br93; break;
        case 'BR94': errorMessage = this.localizationResources.ErrorCode_br94; break;
        case 'BR95': errorMessage = this.localizationResources.ErrorCode_br95; break;
        case 'BR98': errorMessage = this.localizationResources.ErrorCode_br98; break;
        case 'BR99': errorMessage = this.localizationResources.ErrorCode_br99; break;
        case 'info1':
            if (OldVehicleInfo) {
                errorMessage = this.localizationResources.Info_InputChanged_Vehicle1;
            }
            break;
        case 'info2':
            if (NewVehicleSearchInfo) {
                errorMessage = this.localizationResources.Info_InputChanged_Vehicle2; 
            }
            break;
        case 'same': errorMessage = this.localizationResources.Warning_SameMatriculation; break;
        case 'errorsubmit': errorMessage = this.localizationResources.Error_Submit; break;
        case 'errorrevalidation': errorMessage = this.localizationResources.Error_Revalidation; break;
        default:
            errorMessage = '';
    }

    if (validationResult && validationResult.errorCode && validationResult.errorCode.toLocaleUpperCase().indexOf('BR') >= 0) {
        errorCode = validationResult.errorCode;
    } else {
        errorCode = '';
    }

    return {
        errorMessage: errorMessage,
        errorCode: errorCode,
        parameters: parameters
    };
  }

}
