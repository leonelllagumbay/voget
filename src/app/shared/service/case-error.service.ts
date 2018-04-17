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

  public mapError(validationResult: ValidationResultDto, OldVehicleInfo, NewVehicleSearchInfo): string {
    let errorMessage = '';
    let errorCode = '';
    let brCode = '';

    if (validationResult !== undefined && validationResult != null &&
        validationResult.errorCode !== undefined && validationResult.errorCode != null) {
        errorCode = validationResult.errorCode;
        errorMessage = '';
        brCode = ' Code: '.concat(validationResult.errorCode);
    }

    let params = '';
    if (validationResult !== undefined) {
        if (validationResult.parameters !== undefined && validationResult.parameters.length > 0) {
            params = ' \n\n';
            for (let i = 0; i < validationResult.parameters.length; i++) {
                const obj1 = validationResult.parameters[i].name;
                const objTrans1 = this.ObjectMapper(obj1);
                const val1 = validationResult.parameters[i].value;
                params = params + objTrans1 + ': ' + val1;
                if (i % 2 === 0) {
                    params = params + ' | ';
                }
                if (i % 2 !== 0) {
                    params = params + '\n';
                }
            }
        }
    }

    switch (errorCode) {
        case BusinessRuleEnum.BR1:
            errorMessage = this.localizationResources.ErrorCode_br1.concat(brCode);
            break;
        case BusinessRuleEnum.BR100:
            errorMessage = this.localizationResources.ErrorCode_br100.concat(brCode);
            break;
        case BusinessRuleEnum.BR101:
            errorMessage = this.localizationResources.ErrorCode_br101.concat(brCode);
            break;
        case BusinessRuleEnum.BR102:
            errorMessage = this.localizationResources.ErrorCode_br102.concat(brCode);
            break;
    }

    if (errorCode === 'BR103') { errorMessage = this.localizationResources.ErrorCode_br103.concat(brCode);
    } else if (errorCode === 'BR104') { errorMessage = this.localizationResources.ErrorCode_br104.concat(brCode);
    } else if (errorCode === 'BR105') { errorMessage = this.localizationResources.ErrorCode_br105.concat(brCode);
    } else if (errorCode === 'BR106') { errorMessage = this.localizationResources.ErrorCode_br106.concat(brCode);
    } else if (errorCode === 'BR107') { errorMessage = this.localizationResources.ErrorCode_br107.concat(brCode);
    } else if (errorCode === 'BR108') { errorMessage = this.localizationResources.ErrorCode_br108.concat(brCode);
    } else if (errorCode === 'BR109') { errorMessage = this.localizationResources.ErrorCode_br109.concat(brCode);
    } else if (errorCode === 'BR11') { errorMessage = this.localizationResources.ErrorCode_br11.concat(brCode);
    } else if (errorCode === 'BR110') { errorMessage = this.localizationResources.ErrorCode_br110.concat(brCode);
    } else if (errorCode === 'BR116') { errorMessage = this.localizationResources.ErrorCode_br116.concat(brCode);
    } else if (errorCode === 'BR117') { errorMessage = this.localizationResources.ErrorCode_br117.concat(brCode);
    } else if (errorCode === 'BR119') { errorMessage = this.localizationResources.ErrorCode_br119.concat(brCode);
    } else if (errorCode === 'BR120') { errorMessage = this.localizationResources.ErrorCode_br120.concat(brCode);
    } else if (errorCode === 'BR121') { errorMessage = this.localizationResources.ErrorCode_br121.concat(brCode);
    } else if (errorCode === 'BR12') { errorMessage = this.localizationResources.ErrorCode_br12.concat(brCode);
    } else if (errorCode === 'BR123') { errorMessage = this.localizationResources.ErrorCode_br123.concat(brCode);
    } else if (errorCode === 'BR124') { errorMessage = this.localizationResources.ErrorCode_br124.concat(brCode);
    } else if (errorCode === 'BR126') { errorMessage = this.localizationResources.ErrorCode_br126.concat(brCode);
    } else if (errorCode === 'BR13') { errorMessage = this.localizationResources.ErrorCode_br13.concat(brCode);
    } else if (errorCode === 'BR131') { errorMessage = this.localizationResources.ErrorCode_br131.concat(brCode);
    } else if (errorCode === 'BR132') { errorMessage = this.localizationResources.ErrorCode_br132.concat(brCode);
    } else if (errorCode === 'BR135') { errorMessage = this.localizationResources.ErrorCode_br135.concat(brCode);
    } else if (errorCode === 'BR137') { errorMessage = this.localizationResources.ErrorCode_br137.concat(brCode);
    } else if (errorCode === 'BR140') { errorMessage = this.localizationResources.ErrorCode_br140.concat(brCode);
    } else if (errorCode === 'BR141') { errorMessage = this.localizationResources.ErrorCode_br141.concat(brCode);
    } else if (errorCode === 'BR142') { errorMessage = this.localizationResources.ErrorCode_br142.concat(brCode);
    } else if (errorCode === 'BR143') { errorMessage = this.localizationResources.ErrorCode_br143.concat(brCode);
    } else if (errorCode === 'BR144') { errorMessage = this.localizationResources.ErrorCode_br144.concat(brCode);
    } else if (errorCode === 'BR145') { errorMessage = this.localizationResources.ErrorCode_br145.concat(brCode);
    } else if (errorCode === 'BR19') { errorMessage = this.localizationResources.ErrorCode_br19.concat(brCode);
    } else if (errorCode === 'BR20') { errorMessage = this.localizationResources.ErrorCode_br20.concat(brCode);
    } else if (errorCode === 'BR21') { errorMessage = this.localizationResources.ErrorCode_br21.concat(brCode);
    } else if (errorCode === 'BR23') { errorMessage = this.localizationResources.ErrorCode_br23.concat(brCode);
    } else if (errorCode === 'BR24') { errorMessage = this.localizationResources.ErrorCode_br24.concat(brCode);
    } else if (errorCode === 'BR25') { errorMessage = this.localizationResources.ErrorCode_br25.concat(brCode);
    } else if (errorCode === 'BR42') { errorMessage = this.localizationResources.ErrorCode_br42.concat(brCode);
    } else if (errorCode === 'BR43') { errorMessage = this.localizationResources.ErrorCode_br43.concat(brCode).concat(params);
    } else if (errorCode === 'BR44') { errorMessage = this.localizationResources.ErrorCode_br44.concat(brCode).concat(params);
    } else if (errorCode === 'BR45') { errorMessage = this.localizationResources.ErrorCode_br45.concat(brCode);
    } else if (errorCode === 'BR46') { errorMessage = this.localizationResources.ErrorCode_br46.concat(brCode);
    } else if (errorCode === 'BR47') { errorMessage = this.localizationResources.ErrorCode_br47.concat(brCode);
    } else if (errorCode === 'BR48') { errorMessage = this.localizationResources.ErrorCode_br48.concat(brCode);
    } else if (errorCode === 'BR50') { errorMessage = this.localizationResources.ErrorCode_br50.concat(brCode);
    } else if (errorCode === 'BR51') { errorMessage = this.localizationResources.ErrorCode_br51.concat(brCode);
    } else if (errorCode === 'BR52') { errorMessage = this.localizationResources.ErrorCode_br52.concat(brCode);
    } else if (errorCode === 'BR53') { errorMessage = this.localizationResources.ErrorCode_br53.concat(brCode);
    } else if (errorCode === 'BR54') { errorMessage = this.localizationResources.ErrorCode_br54.concat(brCode);
    } else if (errorCode === 'BR55') { errorMessage = this.localizationResources.ErrorCode_br55.concat(brCode);
    } else if (errorCode === 'BR56') { errorMessage = this.localizationResources.ErrorCode_br56.concat(brCode);
    } else if (errorCode === 'BR57') { errorMessage = this.localizationResources.ErrorCode_br57.concat(brCode);
    } else if (errorCode === 'BR58') { errorMessage = this.localizationResources.ErrorCode_br58.concat(brCode);
    } else if (errorCode === 'BR59') { errorMessage = this.localizationResources.ErrorCode_br59.concat(brCode);
    } else if (errorCode === 'BR6') { errorMessage = this.localizationResources.ErrorCode_br6.concat(brCode);
    } else if (errorCode === 'BR60') { errorMessage = this.localizationResources.ErrorCode_br60.concat(brCode);
    } else if (errorCode === 'BR61') { errorMessage = this.localizationResources.ErrorCode_br61.concat(brCode);
    } else if (errorCode === 'BR62') { errorMessage = this.localizationResources.ErrorCode_br62.concat(brCode);
    } else if (errorCode === 'BR63') { errorMessage = this.localizationResources.ErrorCode_br63.concat(brCode);
    } else if (errorCode === 'BR64') { errorMessage = this.localizationResources.ErrorCode_br64.concat(brCode);
    } else if (errorCode === 'BR65') { errorMessage = this.localizationResources.ErrorCode_br65.concat(brCode);
    } else if (errorCode === 'BR66') { errorMessage = this.localizationResources.ErrorCode_br66.concat(brCode);
    } else if (errorCode === 'BR67') { errorMessage = this.localizationResources.ErrorCode_br67.concat(brCode);
    } else if (errorCode === 'BR68') { errorMessage = this.localizationResources.ErrorCode_br68.concat(brCode);
    } else if (errorCode === 'BR69') { errorMessage = this.localizationResources.ErrorCode_br69.concat(brCode);
    } else if (errorCode === 'BR7') { errorMessage = this.localizationResources.ErrorCode_br7.concat(brCode).concat(params);
    } else if (errorCode === 'BR70') { errorMessage = this.localizationResources.ErrorCode_br70.concat(brCode);
    } else if (errorCode === 'BR71') { errorMessage = this.localizationResources.ErrorCode_br71.concat(brCode);
    } else if (errorCode === 'BR72') { errorMessage = this.localizationResources.ErrorCode_br72.concat(brCode);
    } else if (errorCode === 'BR73') { errorMessage = this.localizationResources.ErrorCode_br73.concat(brCode);
    } else if (errorCode === 'BR74') { errorMessage = this.localizationResources.ErrorCode_br74.concat(brCode);
    } else if (errorCode === 'BR75') { errorMessage = this.localizationResources.ErrorCode_br75.concat(brCode);
    } else if (errorCode === 'BR76') { errorMessage = this.localizationResources.ErrorCode_br76.concat(brCode);
    } else if (errorCode === 'BR77') { errorMessage = this.localizationResources.ErrorCode_br77.concat(brCode);
    } else if (errorCode === 'BR78') { errorMessage = this.localizationResources.ErrorCode_br78.concat(brCode);
    } else if (errorCode === 'BR79') { errorMessage = this.localizationResources.ErrorCode_br79.concat(brCode);
    } else if (errorCode === 'BR8') { errorMessage = this.localizationResources.ErrorCode_br8.concat(brCode);
    } else if (errorCode === 'BR80') { errorMessage = this.localizationResources.ErrorCode_br80.concat(brCode);
    } else if (errorCode === 'BR81') { errorMessage = this.localizationResources.ErrorCode_br81.concat(brCode);
    } else if (errorCode === 'BR82') { errorMessage = this.localizationResources.ErrorCode_br82.concat(brCode);
    } else if (errorCode === 'BR83') { errorMessage = this.localizationResources.ErrorCode_br83.concat(brCode);
    } else if (errorCode === 'BR84') { errorMessage = this.localizationResources.ErrorCode_br84.concat(brCode);
    } else if (errorCode === 'BR85') { errorMessage = this.localizationResources.ErrorCode_br85.concat(brCode);
    } else if (errorCode === 'BR86') { errorMessage = this.localizationResources.ErrorCode_br86.concat(brCode);
    } else if (errorCode === 'BR87') { errorMessage = this.localizationResources.ErrorCode_br87.concat(brCode);
    } else if (errorCode === 'BR88') { errorMessage = this.localizationResources.ErrorCode_br88.concat(brCode);
    } else if (errorCode === 'BR89') { errorMessage = this.localizationResources.ErrorCode_br89.concat(brCode);
    } else if (errorCode === 'BR90') { errorMessage = this.localizationResources.ErrorCode_br90.concat(brCode);
    } else if (errorCode === 'BR91') { errorMessage = this.localizationResources.ErrorCode_br91.concat(brCode);
    } else if (errorCode === 'BR92') { errorMessage = this.localizationResources.ErrorCode_br92.concat(brCode);
    } else if (errorCode === 'BR93') { errorMessage = this.localizationResources.ErrorCode_br93.concat(brCode);
    } else if (errorCode === 'BR94') { errorMessage = this.localizationResources.ErrorCode_br94.concat(brCode);
    } else if (errorCode === 'BR95') { errorMessage = this.localizationResources.ErrorCode_br95.concat(brCode);
    } else if (errorCode === 'BR98') { errorMessage = this.localizationResources.ErrorCode_br98.concat(brCode);
    } else if (errorCode === 'BR99') { errorMessage = this.localizationResources.ErrorCode_br99.concat(brCode);
    } else if (errorCode === 'info1') {
      if (OldVehicleInfo) {
          errorMessage = this.localizationResources.Info_InputChanged_Vehicle1;
      }
    } else if (errorCode === 'info2') {
      if (NewVehicleSearchInfo) {
        errorMessage = this.localizationResources.Info_InputChanged_Vehicle2;
      }
    } else if (errorCode === 'same') { errorMessage = this.localizationResources.Warning_SameMatriculation;
    } else if (errorCode === 'errorsubmit') { errorMessage = this.localizationResources.Error_Submit;
    } else if (errorCode === 'errorrevalidation') {
      errorMessage = this.localizationResources.Error_Revalidation;
    }

    return errorMessage;
  }

}
