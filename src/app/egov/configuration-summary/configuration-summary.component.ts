import { CaseService } from './../../shared/service/case.service';
import { ErrorCodeDto } from './../../shared/dto/error-code-dto';
import { ErrorCodeK } from './../../shared/enum/error-code.enum';
import { GlobalService } from './../../shared/service/global.service';
import { VehicleChangeCaseConfigurationDto } from './../../shared/dto/vehicle-change-case-configuration-dto';
import { TranslateService } from '@ngx-translate/core';
import { LabelEnum } from './../../shared/enum/label.enum';
import { UserRole } from './../../shared/enum/user-role.enum';
import { CaseErrorService } from './../../shared/service/case-error.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ILanguage } from '../../shared/interface/ilanguage';

@Component({
  selector: 'app-configuration-summary',
  templateUrl: './configuration-summary.component.html',
  styleUrls: ['./configuration-summary.component.scss']
})
export class ConfigurationSummaryComponent implements OnInit {

  // private $formConfig = $('#formConfig'); // not used
  hasError = false;
  errBE: {
    code: string,
    text: string,
    fe_message
  };
  IsDropdownHasChanged = false;
  isSaveClicked = false;
  isInitialLoad = true;
  infoMessage: string;
  VehicleChangeCaseConfigurationList: any;
  isDigitalWorkflowActivated: boolean;
  IsBusy: boolean;
  localizationResources: ILanguage;
  selectedOptionNew = 'customer';
  selectedOptionNewLabel: string;
  selectedOptionCancel = 'garage';
  selectedOptionCancelLabel: string;
  userRoles: any;
  isDisabled: boolean;
  ErrorCodeMessageError: string;
  pageTitle: string;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }

  constructor(private _caseErrorService: CaseErrorService,
              private _translate: TranslateService,
              private _egovService: GlobalService,
              private _caseService: CaseService) { }

  ngOnInit() {
    this.localizationResources = LabelEnum;
    this._translate.get(this.localizationResources.Option_Customer).subscribe(str => {
      this.selectedOptionNewLabel = str;
      this._translate.get(this.localizationResources.Option_Garage).subscribe(str2 => {
        this.selectedOptionCancelLabel = str2;
        this.SetUpUserRole();
        this.RefreshPageTitle();
        this.Refresh();
      });
    });

    this.VehicleChangeCaseConfigurationList = new Array<VehicleChangeCaseConfigurationDto>();
    this._egovService.languageSwitched.subscribe(
      (language: string) => {
        this.RefreshTranslations();
        this.RefreshPageTitle();
        if (this.errBE !== undefined && this.errBE.code !== undefined && this.errBE.code !== '') {
            const errorObj: ErrorCodeDto = <ErrorCodeDto> this._caseErrorService.convertCaseError(this.errBE.code, this.errBE.text);
            this.ErrorCodeMessageError = errorObj.fe_message;
        }
        this._egovService.setConfirmText(this.localizationResources.Message_NavigateAway);
      }
    );

    this._egovService.setConfirmText(this.localizationResources.Message_NavigateAway);
  }

  UpdateDropdown(newValue, item) {
    this.isInitialLoad = false;
    item.defaultValue = newValue;
    this.IsDropdownHasChanged = true;
    this.isSaveClicked = false;
    this.infoMessage = '';
  }

  compareOriginal() {
    console.log('compare original clicked');
    this.isSaveClicked = false;
    this.infoMessage = '';
    this.isInitialLoad = false;
    if (this.VehicleChangeCaseConfigurationList !== undefined) {
        this.VehicleChangeCaseConfigurationList.forEach(element => {
            if (element.key === 'DigitalWorkflow') {
                this.isDigitalWorkflowActivated = element.isActivated;
            }
        });
    }
    if (this.isDigitalWorkflowActivated) {
        if (this.VehicleChangeCaseConfigurationList !== undefined) {
            this.VehicleChangeCaseConfigurationList.forEach(element => {
                if (element.key === 'SendNewVehicle') {
                    element.isActivated = !this.isDigitalWorkflowActivated;
                }
                if (element.key === 'SendOldVehicle') {
                    element.isActivated = !this.isDigitalWorkflowActivated;
                }
            });
        }
    }
  }

  ClickSave() {
    this.IsBusy = true;
    this.hasError = false;
    this._caseService.EditVehicleChangeCaseConfiguration(this.VehicleChangeCaseConfigurationList).subscribe(result => {
        this.IsBusy = false;
        this.isSaveClicked = true;
        this._translate.get(this.localizationResources.Message_Saved).subscribe(str => {
          this.infoMessage = str;
        });
        this.isInitialLoad = true;
    });
  }

  ClickGoBack() {
    this._translate.get(this.localizationResources.Message_NavigateAway).subscribe(str => {
      const answer = confirm(str);
      if (answer) {
          window.history.back();
      }
    });
  }

  SelectOption(key, option) {
    if (key === 'SendNewVehicle') {
        $('#RegDropdownSendNewVehicle')['collapse']('hide');
        if (option === 'customer') {
          this.selectedOptionNew = 'customer';
          this._translate.get(this.localizationResources.Option_Customer).subscribe(str => {
            this.selectedOptionNewLabel = str;
          });
        } else if (option === 'garage') {
          this.selectedOptionNew = 'garage';
          this._translate.get(this.localizationResources.Option_Garage).subscribe(str => {
            this.selectedOptionNewLabel = str;
          });
        }
    } else if (key === 'SendOldVehicle') {
        $('#RegDropdownSendOldVehicle')['collapse']('hide');
        if (option === 'customer') {
          this.selectedOptionCancel = 'customer';
          this._translate.get(this.localizationResources.Option_Customer).subscribe(str => {
            this.selectedOptionCancelLabel = str;
          });
        } else if (option === 'garage') {
          this.selectedOptionCancel = 'garage';
          this._translate.get(this.localizationResources.Option_Garage).subscribe(str => {
            this.selectedOptionCancelLabel = str;
          });
        }
    }
  }

  Refresh() {
    this.hasError = false;
    this.VehicleChangeCaseConfigurationList = new Array<VehicleChangeCaseConfigurationDto>();
    // this.vehicleChangeCaseConfigurationDataTable.clear();
    this._caseService.GetVehicleChangeCaseConfiguration().subscribe(result => {
        if (result !== undefined) {
          result.forEach(element => {
            element.uiFieldDisplay = this.ConvertKeyTouiField(element.key);
            element.defaultValueDisplay = this.ConvertDefaultValueToText(element.key, element.defaultValue);
            if (element.key === 'DigitalWorkflow') {
                this.isDigitalWorkflowActivated = element.isActivated;
            }
            if (!element.isActivated) {
              element.isActivated = false;
            }
            this.VehicleChangeCaseConfigurationList.push(element);
          });
          console.log('result', result, this.VehicleChangeCaseConfigurationList);
        }
    });
  }

  ConvertKeyTouiField(key: string) {
    let uiFieldDisplay = '';
    if (key === 'DigitalWorkflow') {
      uiFieldDisplay = this.localizationResources.ConfigurationSummary_Digital_Workflow;
    } else if (key === 'Comment') {
      uiFieldDisplay = this.localizationResources.ConfigurationSummary_Comment_field;
    } else if (key === 'Attachment') {
      uiFieldDisplay = this.localizationResources.ConfigurationSummary_Attachments;
    } else if (key === 'SendOldVehicle') {
      uiFieldDisplay = this.localizationResources.ConfigurationSummary_Send_old_vehicle_registration_paper_to;
    } else if (key === 'SendNewVehicle') {
      uiFieldDisplay = this.localizationResources.ConfigurationSummary_Send_new_vehicle_registration_paper_to;
    } else {
      uiFieldDisplay = '-';
    }
    return uiFieldDisplay;
    // else if (key == "CaseVisibility") {
    // uiFieldDisplay = this.$rootScope.localizationResources.ConfigurationSummary_Case_Visibility; }
  }

  ConvertDefaultValueToText(key: string, defaultValue: number) {
    let defaultValueDisplay = '';
    if (defaultValue === 1) {
      defaultValueDisplay = this.localizationResources.Option_Garage;
    } else if (defaultValue === 2) {
      defaultValueDisplay = this.localizationResources.Option_Customer;
    } else {
        defaultValueDisplay = '';
    }
    return defaultValueDisplay;
  }

  SetUpUserRole() {
    if (sessionStorage) {
        this.userRoles = sessionStorage.getItem('userRoles');
        if (this.userRoles !== undefined && this.userRoles !== null) {
            if (this.userRoles.indexOf(UserRole.Dealers) > 0) {
                this.isDisabled = true;
            }
            if (this.userRoles.indexOf(UserRole.ClerkAdmins) > 0) {
                this.isDisabled = false;
            }
            if (this.userRoles.indexOf(UserRole.Clerks) > 0) {
                this.isDisabled = true;
            }
            if (this.userRoles.indexOf(UserRole.DealerAdmins) > 0) {
                this.isDisabled = true;
            }
        } else {
            this.isDisabled = true;
        }
    }
  }

  public RefreshTranslations() {
    if (this.selectedOptionNew === 'customer') {
        this._translate.get(this.localizationResources.Option_Customer).subscribe(str => {
          this.selectedOptionNewLabel = str;
        });
    } else if (this.selectedOptionNew === 'garage') {
        this._translate.get(this.localizationResources.Option_Garage).subscribe(str => {
          this.selectedOptionNewLabel = str;
        });
    }

    if (this.selectedOptionCancel === 'customer') {
      this._translate.get(this.localizationResources.Option_Customer).subscribe(str => {
        this.selectedOptionCancelLabel = str;
      });
    } else if (this.selectedOptionCancel === 'garage') {
      this._translate.get(this.localizationResources.Option_Garage).subscribe(str => {
        this.selectedOptionCancelLabel = str;
      });
    }


    if (this.isSaveClicked) {
        this._translate.get(this.localizationResources.Message_Saved).subscribe(str => {
          this.infoMessage = str;
        });
    } else {
        this.infoMessage = '';
    }
  }

  public RefreshPageTitle() {
      this.pageTitle = this.localizationResources.Label_ConfigurationSummary;
      this._egovService.titleDefined.next(this.pageTitle);
  }

}
