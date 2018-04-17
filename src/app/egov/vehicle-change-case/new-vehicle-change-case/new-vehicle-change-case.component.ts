import { ValidationResult } from './../../../shared/enum/validation-result.enum';
import { ErrorCodeDto } from './../../../shared/dto/error-code-dto';
import { ErrorCodeCaseK } from './../../../shared/enum/vehicle-change-case-code.enum';
import { VehicleChangeCaseDraftDto } from './../../../shared/dto/vehicle-change-case-draft-dto';
import { VehicleChangeCaseSubmitResultDto } from './../../../shared/dto/vehicle-change-case-submit-result-dto';
import { LabelEnum } from './../../../shared/enum/label.enum';
import { ILanguage } from './../../../shared/interface/ilanguage';
import { ValidationResultDto } from './../../../shared/dto/validation-result-dto';
import { NewVehicleDto } from './../../../shared/dto/new-vehicle-dto';
import { OldVehicleDto } from './../../../shared/dto/old-vehicle-dto';
import { CaseService } from './../../../shared/service/case.service';
import { CaseStatusEnum } from './../../../shared/enum/case-status.enum';
import { CaseErrorService } from './../../../shared/service/case-error.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErniJsUtilsBlockControl } from './../../../shared/class/utils';
import { GlobalService } from './../../../shared/service/global.service';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-new-vehicle-change-case',
  templateUrl: './new-vehicle-change-case.component.html',
  styleUrls: ['./new-vehicle-change-case.component.scss']
})
export class NewVehicleChangeCaseComponent implements OnInit, OnDestroy {

  private $submitContainer = $('#submitContainer');
  private blocker: any;
  private url: string;
  pageTitle: string;
  localizationResources: ILanguage;
  errBE: string;
  allFiles: any;
  filesSaved: Array<{}>;
  listOfFilesToRemove: Object;
  isSubmitCase: boolean;
  isSaveAsDraftRejectedClicked: boolean;
  hasUploadError: boolean;
  showAttachmentWarning: boolean;
  isUploadingAttachment: boolean;
  uploadedCount: number;
  fileCounter: number;
  files: any;
  fileToDeleteCount: number;
  IsSaveAsDraftBusy: boolean;
  IsBusy: boolean;
  IsEditClicked: boolean;
  selectedCaseId: string;
  caseStatusEnum: any;
  OldVehicle = new OldVehicleDto();
  NewVehicle = new NewVehicleDto();
  IsSearch1Allowed: boolean;
  IsSearch2Allowed: boolean;
  IsSection1Expanded: boolean;
  IsSection2Expanded: boolean;
  SearchOldVehicleClicked: boolean;
  IsOldVehicleValid: boolean;
  V1M1HasError: boolean;
  V1M2HasError: boolean;
  V1M3HasError: boolean;
  Chassis1HasError: boolean;
  IsVehicle1Matriculation1Valid: boolean;
  IsVehicle1Matriculation2Valid: boolean;
  IsVehicle1Matriculation3Valid: boolean;
  IsVehicle1ChassisValid: boolean;
  SearchedMatriculation1: string;
  SearchedMatriculation2: string;
  SearchNewVehicleClicked: boolean;
  IsNewVehicleValid: boolean;
  V2M1HasError: boolean;
  V2M2HasError: boolean;
  V2M3HasError: boolean;
  Chassis2HasError: boolean;
  IsVehicle2Matriculation1Valid: boolean;
  IsVehicle2Matriculation2Valid: boolean;
  IsVehicle2Matriculation3Valid: boolean;
  IsVehicle2ChassisValid: boolean;
  IsConfirmed: boolean;
  IsSubmitted: boolean;
  OldVehicleSuccess: boolean;
  OldVehicleWarning: boolean;
  OldVehicleError: boolean;
  OldVehicleInfo: boolean;
  NewVehicleSearchSuccess: boolean;
  NewVehicleSearchWarning: boolean;
  NewVehicleSearchError: boolean;
  NewVehicleSearchInfo: boolean;
  IsSubmitSuccess: boolean;
  IsSubmitError: boolean;
  IsSubmitWarning: boolean;
  IsSubmitInfo: boolean;
  WarningValidationResult: ValidationResultDto;
  ErrorValidationResult: ValidationResultDto;
  IsSearch1Busy: boolean;
  LastStep: string;
  OldVehicleSearchResult: any;
  SearchedChassis1: string;
  ErrorCodeMessageWarning: string;
  ErrorCodeMessageError: string;
  IsSearch2Busy: boolean;
  NewVehicleSearchResult: any;
  SearchedChassis2: string;
  IsVehicle1Expanded: boolean;
  IsVehicle2Expanded: boolean;
  RtdLocationList: Array<{}>;
  SelectedRtd: any;
  selectedOptionNew: number;
  selectedOptionNewLabel: string;
  selectedOptionCancel: number;
  selectedOptionCancelLabel: string;
  IsCommentConfigShown: boolean;
  IsSendOldVehicleConfigShown: boolean;
  OldPaperValueId: any;
  currentUser: any;
  IsSendNewVehicleConfigShown: boolean;
  NewPaperValueId: any;
  OldPaper: string;
  NewPaper: string;
  SelectedCase: any;
  Comment: any;
  SameVehicleError: any;
  SelectedCaseId: string;
  InfoValidationResult1: ValidationResultDto;
  InfoValidationResult2: ValidationResultDto;
  ErrorCodeMessageInfo1: string;
  ErrorCodeMessageInfo2: string;
  VehicleChangeCaseSubmitResult: VehicleChangeCaseSubmitResultDto;
  VehicleChangeCaseDraftDto = new VehicleChangeCaseDraftDto;
  ShowPrint: boolean;
  IsPrintBusy: boolean;
  NewVehicleNewVehicle = {};
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }

  constructor(private _egovService: GlobalService, private _router: Router,
              public caseErrorService: CaseErrorService, public caseService: CaseService,
              private _route: ActivatedRoute) { }

  ngOnInit() {

    this.url = this._egovService.getEnv();
    this.$submitContainer = $('#submitContainer');
    this.blocker = new ErniJsUtilsBlockControl(this.$submitContainer, false);

    this.localizationResources = LabelEnum;
    this.caseStatusEnum = CaseStatusEnum;

    this.errBE = '{}';
    this.filesSaved = [];
    this.listOfFilesToRemove = {};
    this.isSubmitCase = false;
    this.isSaveAsDraftRejectedClicked = false;
    this.hasUploadError = false;
    this.showAttachmentWarning = false;
    this.isUploadingAttachment = false;
    this.uploadedCount = 0;
    this.files = [];
    this.fileCounter = 0;

    this.OldVehicle = new OldVehicleDto();
    this.NewVehicle = new NewVehicleDto();

    this.IsSearch1Allowed = true;
    this.IsSearch2Allowed = true;

    this.IsSection1Expanded = true;
    this.IsSection2Expanded = false;
    this.SearchOldVehicleClicked = false;
    this.IsOldVehicleValid = false;
    this.V1M1HasError = false;
    this.V1M2HasError = false;
    this.V1M3HasError = false;
    this.Chassis1HasError = false;
    this.IsVehicle1Matriculation1Valid = false;
    this.IsVehicle1Matriculation2Valid = false;
    this.IsVehicle1Matriculation3Valid = false;
    this.IsVehicle1ChassisValid = false;
    this.SearchedMatriculation1 = '';
    this.SearchedMatriculation2 = '';

    this.SearchNewVehicleClicked = false;
    this.IsNewVehicleValid = false;
    this.V2M1HasError = false;
    this.V2M2HasError = false;
    this.V2M3HasError = false;
    this.Chassis2HasError = false;
    this.IsVehicle2Matriculation1Valid = false;
    this.IsVehicle2Matriculation2Valid = false;
    this.IsVehicle2Matriculation3Valid = false;
    this.IsVehicle2ChassisValid = false;

    this.IsConfirmed = false;
    this.IsSubmitted = false;

    this.OldVehicleSuccess = false;
    this.OldVehicleWarning = false;
    this.OldVehicleError = false;
    this.OldVehicleInfo = false;
    this.NewVehicleSearchSuccess = false;
    this.NewVehicleSearchWarning = false;
    this.NewVehicleSearchError = false;
    this.NewVehicleSearchInfo = false;

    this.IsSubmitSuccess = false;
    this.IsSubmitWarning = false;
    this.IsSubmitError = false;
    this.IsSubmitInfo = false;

    this.WarningValidationResult = new ValidationResultDto();
    this.ErrorValidationResult = new ValidationResultDto();

    this.IsSearch1Busy = false;

    this.viewContentLoaded();

    this.RtdLocationList = [];

    this._egovService.errorDefined.subscribe((er: HttpErrorResponse) => {
      console.log('error catched here', er);
      if (er.error) {
        let code = '';
        let text = '';
        let parameters = [];
        if (er.error && er.error[0] && er.error[0].code ) { // is array
          code = er.error[0].code;
          text = er.error[0].text;
          parameters = er.error[0].parameters;
        } else {
          code = er.error.code;
          if (er.error.text) {
            text = er.error.text;
          } else {
            text = er.error.message;
          }
          parameters = er.error.parameters;
        }
        this.ErrorValidationResult.errorCode = code;
        this.ErrorValidationResult.code = code;
        if (er.error.text) {
          this.ErrorValidationResult.message = text;
        } else {
          this.ErrorValidationResult.message = text;
        }

        this.ErrorValidationResult.type = 'Error';
        this.ErrorValidationResult.parameters = parameters;

        this.SearchOldVehicleClicked = true;
        this.OldVehicleSuccess = false;
        this.OldVehicleError = true;
        this.IsSection2Expanded = false;

        this.IsSearch1Busy = false;

        const customError = this.caseErrorService.convertCaseError(this.ErrorValidationResult.code, this.ErrorValidationResult.message);
        console.log('error custom code', this.ErrorValidationResult.code, customError);
        this.ErrorCodeMessageError = (<ErrorCodeDto>customError).fe_message;
      }
    });

    this._egovService.setConfirmText(this.localizationResources.Message_NavigateAway);
  }

  onLoad(e, reader, file, fileList, fileOjects, fileObj) {
    let arrayImages = [];
    let arrayAllFiles = [];

    // alert('this is handler for file reader onload event!');
    // console.log(fileObj.base64.length);
    arrayImages = arrayImages.concat('data:' + fileObj.filetype + ';base64,' + fileObj.base64);
    fileObj.errorMessageBE = ''; // set this when backend error occurs
    fileObj.uploadedFileId = ''; // set when it is already uploaded
    arrayAllFiles = arrayAllFiles.concat(fileObj);

    this.allFiles = arrayAllFiles;
    if (this.allFiles) {
      if ((this.allFiles.length + this.filesSaved.length) > 5) {
          this.allFiles.length = 5 - this.filesSaved.length; // limit files to 5 items
      }
    }

    console.log('on load x', fileList, this.allFiles);
  }

  onChange(e, fileList) {
    // console.log('fileListz', fileList, $scope.allFiles);
    let fileCount = 0;
    if (this.allFiles) {
        fileCount = this.allFiles.length + fileList.length;
    } else {
        fileCount = fileList.length;
    }
    if ((fileCount + this.filesSaved.length) > 5) {
        alert('The maximum amount of 5 attachments was reached.');
    }
  }

  isFileSizeOver(fileIndex) {
    const file = this.allFiles[fileIndex];
    if (file) {
        const fileSize = file['filesize'] / 1024 / 1024;
        if (fileSize > 5) { // GT 5 MB
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
  }

  isFileSupported(fileIndex) {
    const file = this.allFiles[fileIndex];
    const fileExtensionPattern = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gmi; // regex flags -- Global, Multiline, Insensitive
    let extension = '';
    let requiredExt = false;
    if (file) {
        extension = file['filename'].match(fileExtensionPattern)[0].toLowerCase();
        requiredExt =  (extension === '.pdf' || extension === '.doc' ||
                        extension === '.docx' || extension === '.xls' ||
                        extension === '.xlsx' || extension === '.jpg' ||
                        extension === '.jpeg' || extension === '.bmp' || extension === '.png');
    }
    if (requiredExt) {
        return true;
    } else {
        return false;
    }
  }

  uploadAttachments(cId: number) {
    // Delete files from $scope.listOfFilesToRemove
    // console.log('service name is ', service.ServerBaseUrl);
    const fileIdToRemove = Object.keys(this.listOfFilesToRemove);
    // console.log('uploading attachments', fileIdToRemove);
    const caseId = cId;
    this.fileToDeleteCount = fileIdToRemove.length;
    if (fileIdToRemove.length) {
        for (const id of fileIdToRemove) {
            // console.log('the file id is ', id);
            this.caseService.DeleteChangeCaseAttachment(id).subscribe(result => {
                this.fileToDeleteCount -= 1;
                if (this.fileToDeleteCount === 0) {
                    // console.log('case id is ', caseId);
                    this.uploadOtherAttachments(caseId);
                }
            });
        }
    } else {
        this.uploadOtherAttachments(caseId);
    }
  }

  uploadOtherAttachments(cId: number) {
    const caseId = cId;
    if (this.allFiles) {
        if (this.allFiles.length > 5) {
            this.allFiles.length =  5;
        }
        this.fileCounter = this.allFiles.length;
    } else {
        this.fileCounter = 0;
    }

    if (this.fileCounter) {
        this.hasUploadError = false;
        this.showAttachmentWarning = false;
        for (let i = 0; i < this.allFiles.length; i++) {
            const file = this.allFiles[i];

            if (file.uploadedFileId || file.uploadedFileId === 0) {
                // File is already uploaded
                this.fileCounter -= 1;
                if (this.fileCounter === 0) {
                    this.updateFlagsWhenNotUpdating();
                    break;
                } else {
                    continue;
                }
            }

            let requiredExt = false;
            let extension = '';
            let fileSize = 0;
            if (file) {
                fileSize = file['filesize'] / 1024 / 1024;
                const fileExtensionPattern = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gmi; // regex flags -- Global, Multiline, Insensitive
                extension = file['filename'].match(fileExtensionPattern)[0].toLowerCase();
                requiredExt =  (extension === '.pdf' || extension === '.doc' || extension === '.docx' ||
                                extension === '.xls' || extension === '.xlsx' || extension === '.jpg' ||
                                extension === '.jpeg' || extension === '.bmp' || extension === '.png');
            }
            if (requiredExt && !(fileSize > 5) ) { // Greater than 5 MB
                // upload files
                const data = {
                    vehicleChangeCaseId: caseId,
                    name: file['filename'],
                    data: file['base64']
                };

                this.caseService.UploadChangeCaseAttachment(data)
                  .subscribe((result: {status: number, responseJSON: any, vehicleChangeCaseId: string, id: string}) => {
                    console.log('file upload result', result);
                    this.fileCounter -= 1;
                    if (result && result.status && !(result.status === 200 || result.status === 201 )) {
                        if (result.responseJSON && result.responseJSON[0]) {
                            // $scope.allFiles[i]['errorMessageBE'] =  result.responseJSON[0].text;
                            this.allFiles[i]['errorMessageBE'] =  '   ';
                        } else {
                            this.allFiles[i]['errorMessageBE'] = '    ';
                        }
                        this.hasUploadError = true;
                    }

                    if (result && result.id && result.vehicleChangeCaseId) {
                        this.allFiles[i]['uploadedFileId'] =  result.id;
                    }

                    if (this.fileCounter === 0) {
                      this.updateFlagsWhenNotUpdating();
                    }
                });

            } else {
                this.fileCounter -= 1;
                if (this.fileCounter === 0) {
                    this.updateFlagsWhenNotUpdating();
                } else {
                    continue;
                }
            }
        }
    } else {
        this.updateFlagsWhenNotUpdating();
    }
  }

  updateFlagsWhenNotUpdating() {
    if (this.hasUploadError) {
        this.isUploadingAttachment = false;
        this.IsSaveAsDraftBusy = false;
        this.showAttachmentWarning = true;
        this.hasUploadError = false;
        this.isSubmitCase = false;
        this.IsBusy = false;
    } else {
        if (this.isSubmitCase) {
            this.isSubmitCase = false;
            this.IsEditClicked = true;
            this.ClickSubmit();
        } else {
            this.isUploadingAttachment = false;
            this.IsSaveAsDraftBusy = false;
            this.selectedCaseId = '';
            // $state.go('vehicleChangeCaseOverview');
            this._router.navigate(['vehicleChangeCaseOverview']);
        }
    }
  }

  getSavedFiles(caseId: number) {
    this.caseService.GetSavedAttachmentByCaseId(caseId).subscribe(response => {
        for (let f = 0; f < response.length; f++) {
            // console.log('response', response[f]['id'], response[f]['name']);
            if (response[f]['id'] && response[f]['name']) {
                const fileInfo = {
                    id: response[f]['id'],
                    filename: response[f]['name']
                };
                this.filesSaved.push(fileInfo);
            }
        }
    });
  }

  hideFileByIndex(index) {
    if (this.allFiles && this.allFiles['uploadedFileId'] && this.allFiles['uploadedFileId'].length) {
        this.listOfFilesToRemove[this.allFiles['uploadedFileId']] = this.allFiles['uploadedFileId'];
    } else {
        this.allFiles.splice(index, 1);
        this.files.splice(index, 1);
    }
    console.log('hide files', this.allFiles, this.files);
  }

  hideSavedFile(index, fileId) {
    this.filesSaved.splice(index, 1);
    this.listOfFilesToRemove[fileId] = fileId;
  }

  Section1Toggle() {
    this.IsSection1Expanded = !this.IsSection1Expanded;
  }

  Section2Toggle() {
    this.IsSection2Expanded = !this.IsSection2Expanded;
  }

  ResetSectionA() {
    this.NewVehicle = new NewVehicleDto();
    this.NewVehicleSearchSuccess = false;
    this.NewVehicleSearchWarning = false;
    this.NewVehicleSearchError = false;
    this.NewVehicleSearchInfo = false;
    this.IsConfirmed = false;
    this.IsSubmitted = false;
    this.SearchNewVehicleClicked = false;
    this.IsNewVehicleValid = false;
    this.V2M1HasError = false;
    this.V2M2HasError = false;
    this.V2M3HasError = false;
    this.Chassis2HasError = false;
    this.IsVehicle2Matriculation1Valid = false;
    this.IsVehicle2Matriculation2Valid = false;
    this.IsVehicle2Matriculation3Valid = false;
    this.IsVehicle2ChassisValid = false;
    this.IsSubmitError = false;
    $('#completion')['collapse']('hide');
  }

  ResetSectionB = () => {
    this.IsConfirmed = false;
    this.IsSubmitted = false;
    this.IsSubmitError = false;
    $('#completion')['collapse']('hide');
  }

  SearchVehicle1(isAutomated) {
    this.LastStep = 'A';
    this.ResetSectionA();

    this.IsSearch1Busy = true;
    this.OldVehicleSuccess = false;
    this.OldVehicleWarning = false;
    this.OldVehicleError = false;
    this.OldVehicleInfo = false;
    this.SearchOldVehicleClicked = false;

    const mat1 = this.OldVehicle.Matriculation1 + this.OldVehicle.Matriculation2 + this.OldVehicle.Matriculation3;
    this.caseService.GetVehicleOutOfCirculation(parseFloat(mat1), this.OldVehicle.Chassis).subscribe(result => {
        this.IsSearch1Busy = false;
        this.OldVehicleSearchResult = result;

        if (this.OldVehicleSearchResult && this.OldVehicleSearchResult.validationResult) {
            if (this.OldVehicleSearchResult.validationResult.type === ValidationResult.Success) {
                this.SearchOldVehicleClicked = true;
                this.SearchedMatriculation1 = mat1;
                this.SearchedChassis1 = this.OldVehicle.Chassis;
                this.OldVehicleSuccess = true;
                this.OldVehicleWarning = false;
                this.OldVehicleError = false;
                this.OldVehicleInfo = false;
                this.IsSection2Expanded = true;
            } else if (this.OldVehicleSearchResult.validationResult.type === ValidationResult.Warning) {
                this.SearchOldVehicleClicked = true;
                this.SearchedMatriculation1 = mat1;
                this.SearchedChassis1 = this.OldVehicle.Chassis;
                this.OldVehicleSuccess = false;
                this.OldVehicleWarning = true;
                this.IsSection2Expanded = false;
                this.WarningValidationResult = new ValidationResultDto();
                this.WarningValidationResult = this.OldVehicleSearchResult.validationResult;
                this.ErrorCodeMessageWarning = this.ErrorMapper(this.WarningValidationResult);
            } else if (this.OldVehicleSearchResult.validationResult.type === ValidationResult.Error) {
                this.SearchedMatriculation1 = mat1;
                this.SearchedChassis1 = this.OldVehicle.Chassis;
                this.SearchOldVehicleClicked = true;
                this.OldVehicleSuccess = false;
                this.OldVehicleError = true;
                this.IsSection2Expanded = false;
                this.ErrorValidationResult = new ValidationResultDto();
                this.ErrorValidationResult = this.OldVehicleSearchResult.validationResult;
                this.ErrorCodeMessageError = this.ErrorMapper(this.ErrorValidationResult);
            }

        }
        if (this.IsEditClicked && isAutomated) {
            this.LoadVehicle2(isAutomated);
        }
    });
  }

  CheckIfOldVehicleValid() {
    return this.IsVehicle1Matriculation1Valid &&
           this.IsVehicle1Matriculation2Valid &&
           this.IsVehicle1Matriculation3Valid &&
           this.IsVehicle1ChassisValid;
  }

  CheckIfNewVehicleValid() {
    return this.IsVehicle2Matriculation1Valid &&
          this.IsVehicle2Matriculation2Valid &&
          this.IsVehicle2Matriculation3Valid &&
          this.IsVehicle2ChassisValid;
  }

  SearchVehicle2() {
    this.LastStep = 'B';
    this.ResetSectionB();

    this.IsSearch2Busy = true;
    this.NewVehicleSearchSuccess = false;
    this.NewVehicleSearchError = false;
    this.NewVehicleSearchWarning = false;
    this.NewVehicleSearchInfo = false;
    this.SearchNewVehicleClicked = false;

    const mat2 = this.NewVehicle.Matriculation1 + this.NewVehicle.Matriculation2 + this.NewVehicle.Matriculation3;
    this.caseService.GetVehicleInToCirculation(parseFloat(mat2), this.NewVehicle.Chassis,
                                                parseFloat(this.SearchedMatriculation1), this.SearchedChassis1).subscribe(result => {
      this.IsSearch2Busy = false;
      this.NewVehicleSearchResult = result;
      if (this.NewVehicleSearchResult && this.NewVehicleSearchResult.validationResult) {
        if (this.NewVehicleSearchResult.validationResult.type === ValidationResult.Success) {
          this.SearchNewVehicleClicked = true;
          this.SearchedMatriculation2 = mat2;
          this.SearchedChassis2 = this.NewVehicle.Chassis;
          this.NewVehicleSearchSuccess = true;
          this.NewVehicleSearchWarning = false;
          this.NewVehicleSearchError = false;
          this.NewVehicleSearchInfo = false;
            if (this.IsEditClicked) {
              this.IsConfirmed = false;
            }
        } else if (this.NewVehicleSearchResult.validationResult.type === ValidationResult.Warning) {
          this.SearchedMatriculation2 = mat2;
          this.SearchedChassis2 = this.NewVehicle.Chassis;
          this.SearchNewVehicleClicked = true;
          this.NewVehicleSearchSuccess = false;
          this.NewVehicleSearchWarning = true;
          this.WarningValidationResult = new ValidationResultDto();
          this.WarningValidationResult = this.NewVehicleSearchResult.validationResult;
          this.ErrorCodeMessageWarning = this.ErrorMapper(this.WarningValidationResult);
        } else if (this.NewVehicleSearchResult.validationResult.type === ValidationResult.Error) {
          this.SearchedMatriculation2 = mat2;
          this.SearchedChassis2 = this.NewVehicle.Chassis;
          this.SearchNewVehicleClicked = true;
          this.NewVehicleSearchSuccess = false;
          this.NewVehicleSearchError = true;
          this.ErrorValidationResult = new ValidationResultDto();
          this.ErrorValidationResult = this.NewVehicleSearchResult.validationResult;
          this.ErrorCodeMessageError = this.ErrorMapper(this.ErrorValidationResult);
        }
      }
    });
  }

  ExpandVehicle1() {
    this.IsVehicle1Expanded = true;
  }

  ExpandVehicle2() {
    this.IsVehicle2Expanded = true;
  }

  GetRtdLocation() {
    this.caseService.GetRtdLocation().subscribe(result => {
      this.RtdLocationList = result;
      this.SelectedRtd = result[0];
    });
  }

  GetVehicleChangeConfiguration() {
    this.selectedOptionNew = 2;
    this.selectedOptionNewLabel = this.localizationResources.Option_Customer;
    this.selectedOptionCancel = 1;
    this.selectedOptionCancelLabel = this.localizationResources.Option_Garage;
    this.caseService.GetVehicleChangeCaseConfiguration().subscribe(result => {
      const config = result;
      if (result !== undefined) {
        result.forEach(element => {
          if (element.key === 'Comment') {
              this.IsCommentConfigShown = element.isActivated;
          }
          if (element.key === 'SendOldVehicle') {
              this.IsSendOldVehicleConfigShown = element.isActivated;
              if (!this.IsSendOldVehicleConfigShown) {
                this.OldPaperValueId = element.defaultValue;
              } else {
                this.OldPaperValueId = this.selectedOptionCancel;
              }
              if (this.currentUser !== undefined) {
                this.EstablishConfigLanguageOld();
              } else {
                  this.SetConfigToGermanOld();
              }
          }
          if (element.key === 'SendNewVehicle') {
              this.IsSendNewVehicleConfigShown = element.isActivated;
              if (!this.IsSendNewVehicleConfigShown) {
                  this.NewPaperValueId = element.defaultValue;
              } else {
                  this.NewPaperValueId = this.selectedOptionNew;
              }
              if (this.currentUser !== undefined) {
                  this.EstablishConfigLanguageNew();
              } else {
                  this.SetConfigToGermanNew();
              }
          }
        });
      }
    });
  }

  SetConfigToGermanOld() {
    if (this.OldPaperValueId === 1) {
        this.OldPaper = 'Garage';
    } else if (this.OldPaperValueId === 2) {
        this.OldPaper = 'Kunde';
    }
  }

  SetConfigToGermanNew() {
    if (this.NewPaperValueId === 1) {
        this.NewPaper = 'Garage';
    } else if (this.NewPaperValueId === 2) {
        this.NewPaper = 'Kunde';
    }
  }

  EstablishConfigLanguageOld() {
    if (this.currentUser.canton === 'vd') {
        if (this.OldPaperValueId === 1) {
            this.OldPaper = 'Garage';
        } else if (this.OldPaperValueId === 2) {
            this.OldPaper = 'Cliente';
        }
    } else {
        this.SetConfigToGermanOld();
    }
  }

  EstablishConfigLanguageNew() {
    if (this.currentUser.canton === 'vd') {
      if (this.NewPaperValueId === 1) {
          this.NewPaper = 'Garage';
      } else if (this.NewPaperValueId === 2) {
          this.NewPaper = 'Cliente';
      }
    } else {
      this.SetConfigToGermanNew();
    }
  }

  LoadVehicle1() {
    if (this.SelectedCase && this.SelectedCase.matriculationNr1) {
      this.OldVehicle.Matriculation1 = this.SelectedCase.matriculationNr1.toString().slice(0, 3);
      this.OldVehicle.Matriculation2 = this.SelectedCase.matriculationNr1.toString().slice(3, 6);
      this.OldVehicle.Matriculation3 = this.SelectedCase.matriculationNr1.toString().slice(6, 9);
    }

    if (this.SelectedCase && this.SelectedCase.chassisNr1) {
      this.OldVehicle.Chassis = this.SelectedCase.chassisNr1.toString();
    }

    this.IsOldVehicleValid = true;
    this.IsVehicle1ChassisValid = true;
    this.IsVehicle1Matriculation1Valid = true;
    this.IsVehicle1Matriculation2Valid = true;
    this.IsVehicle1Matriculation3Valid = true;
  }

  LoadVehicle2(isAutomated) {
    if (this.SelectedCase.matriculationNr2 !== undefined &&
      this.SelectedCase.matriculationNr2 !== null && this.SelectedCase.matriculationNr2 !== 0) {
      this.NewVehicle.Matriculation1 = this.SelectedCase.matriculationNr2.toString().slice(0, 3);
      this.NewVehicle.Matriculation2 = this.SelectedCase.matriculationNr2.toString().slice(3, 6);
      this.NewVehicle.Matriculation3 = this.SelectedCase.matriculationNr2.toString().slice(6, 9);
      this.NewVehicle.Chassis = this.SelectedCase.chassisNr2;
      this.SelectedRtd = this.SelectedCase.rtdLocation;
      this.Comment = this.SelectedCase.comment;
      if (this.SelectedCase.newPaperValueId !== undefined) {
        this.selectedOptionNew = this.SelectedCase.newPaperValueId;
        if (this.selectedOptionNew === 1) {
          this.selectedOptionNewLabel = this.localizationResources.Option_Garage;
        } else if (this.selectedOptionNew === 2) {
          this.selectedOptionNewLabel = this.localizationResources.Option_Customer;
        }
      }

      if (this.SelectedCase.oldPaperValueId !== undefined) {
        this.selectedOptionCancel = this.SelectedCase.oldPaperValueId;
        if (this.selectedOptionCancel === 1) {
          this.selectedOptionCancelLabel = this.localizationResources.Option_Garage;
        } else if (this.selectedOptionCancel === 2) {
          this.selectedOptionCancelLabel = this.localizationResources.Option_Customer;
        }
      }

      this.IsNewVehicleValid = true;
      this.IsVehicle2ChassisValid = true;
      this.IsVehicle2Matriculation1Valid = true;
      this.IsVehicle2Matriculation2Valid = true;
      this.IsVehicle2Matriculation3Valid = true;
      if (isAutomated) {
        this.CheckIfSameMatriculation();
        if (!this.SameVehicleError) {
          this.SearchVehicle2();
        }
      } else {
        this.SearchVehicle2();
      }
    }
  }

  GetVehicleChangeCase() {
    if (this.SelectedCaseId !== undefined && this.SelectedCaseId !== null && this.SelectedCaseId !== '') {
      this.IsSubmitted = false;
      this.IsEditClicked = true;
      this.caseService.GetVehicleChangeCase(parseFloat(this.SelectedCaseId)).subscribe(result => {
        this.SelectedCase = result;
          if (this.SelectedCase.status === this.caseStatusEnum.Status_New) { // New
            this.IsSubmitted = false;
            this.LoadVehicle1();
          } else if (this.SelectedCase.status === this.caseStatusEnum.Status_InProgress ||
                      this.SelectedCase.status === this.caseStatusEnum.Status_Rejected) { // in Progress, rejected
            this.IsSubmitted = false;
            this.LoadVehicle1();
            this.SearchVehicle1(true);
          } else if (this.SelectedCase.status === this.caseStatusEnum.Status_Cancelled ||
                      this.SelectedCase.status === this.caseStatusEnum.Status_Submitted ||
                      this.SelectedCase.status === this.caseStatusEnum.Status_Completed) { // cancelled, submitted, completed
            this.IsSubmitted = true;
            this.LoadVehicle1();
            this.SearchVehicle1(true);
          } else {
            this.selectedCaseId = '';
            // $state.go('vehicleChangeCaseOverview');
            this._router.navigate(['vehicleChangeCaseOverview']);
          }
        });
    }
  }

  SelectRtd(rtd) {
    $('#RtdLocation')['collapse']('hide');
    this.SelectedRtd = rtd;
  }

  ValidateVehicle1Matriculation1() {
    if (this.OldVehicle.Matriculation1 !== undefined) {
      this.OldVehicle.Matriculation1 = this.OldVehicle.Matriculation1.replace(/[^0-9]/g, '');
      if (this.OldVehicle.Matriculation1.length === 3) {
        this.IsVehicle1Matriculation1Valid = true;
        this.V1M1HasError = false;
      } else {
        this.IsVehicle1Matriculation1Valid = false;
        this.V1M1HasError = true;
      }
    } else {
      this.IsVehicle1Matriculation1Valid = false;
      this.V1M1HasError = true;
    }

    this.IsOldVehicleValid = this.CheckIfOldVehicleValid();

    this.CheckInfoVehicle1();
    this.CheckIfSameMatriculation();
  }

  ValidateVehicle1Matriculation2() {
    if (this.OldVehicle.Matriculation2 !== undefined) {
        this.OldVehicle.Matriculation2 = this.OldVehicle.Matriculation2.replace(/[^0-9]/g, '');
        if (this.OldVehicle.Matriculation2.length === 3) {
            this.IsVehicle1Matriculation2Valid = true;
            this.V1M2HasError = false;
        } else {
            this.IsVehicle1Matriculation2Valid = false;
            this.V1M2HasError = true;
        }
    } else {
        this.IsVehicle1Matriculation2Valid = false;
        this.V1M2HasError = true;
    }

    this.IsOldVehicleValid = this.CheckIfOldVehicleValid();

    this.CheckInfoVehicle1();
    this.CheckIfSameMatriculation();
  }

  ValidateVehicle1Matriculation3() {
    if (this.OldVehicle.Matriculation3 !== undefined) {
      this.OldVehicle.Matriculation3 = this.OldVehicle.Matriculation3.replace(/[^0-9]/g, '');
      if (this.OldVehicle.Matriculation3.length === 3) {
        this.IsVehicle1Matriculation3Valid = true;
        this.V1M3HasError = false;
      } else {
        this.IsVehicle1Matriculation3Valid = false;
        this.V1M3HasError = true;
      }
    } else {
      this.IsVehicle1Matriculation3Valid = false;
      this.V1M3HasError = true;
    }

    this.IsOldVehicleValid = this.CheckIfOldVehicleValid();

    this.CheckInfoVehicle1();
    this.CheckIfSameMatriculation();
  }

  CheckInfoVehicle1() {
    if (this.SearchOldVehicleClicked) {
      const mat1 = this.OldVehicle.Matriculation1 + this.OldVehicle.Matriculation2 + this.OldVehicle.Matriculation3;
      if (mat1 !== this.SearchedMatriculation1 || this.OldVehicle.Chassis !== this.SearchedChassis1) {
        this.OldVehicleInfo = true;
        this.InfoValidationResult1 = new ValidationResultDto();
        this.InfoValidationResult1.errorCode = 'info1';
        this.ErrorCodeMessageInfo1 = this.ErrorMapper(this.InfoValidationResult1);
      } else {
        this.OldVehicleInfo = false;
      }
    } else {
      this.OldVehicleInfo = false;
    }
  }

  ValidateVehicle1Chassis() {
    if (this.OldVehicle.Chassis !== undefined) {
      this.OldVehicle.Chassis = this.OldVehicle.Chassis.replace(/[^a-zA-Z0-9]/gi, '');
      if (this.OldVehicle.Chassis.length === 4) {
        this.IsVehicle1ChassisValid = true;
        this.Chassis1HasError = false;
      } else {
        this.IsVehicle1ChassisValid = false;
        this.Chassis1HasError = true;
      }
    } else {
        this.IsVehicle1ChassisValid = false;
        this.Chassis1HasError = true;
    }

    this.IsOldVehicleValid = this.CheckIfOldVehicleValid();
    this.CheckInfoVehicle1();
  }

  ValidateVehicle2Matriculation1 = () => {
    if (this.NewVehicle.Matriculation1 !== undefined) {
      this.NewVehicle.Matriculation1 = this.NewVehicle.Matriculation1.replace(/[^0-9]/g, '');
      if (this.NewVehicle.Matriculation1.length === 3) {
        this.IsVehicle2Matriculation1Valid = true;
        this.V2M1HasError = false;
      } else {
        this.IsVehicle2Matriculation1Valid = false;
        this.V2M1HasError = true;
      }
    } else {
      this.IsVehicle2Matriculation1Valid = false;
      this.V2M1HasError = true;
    }

    this.IsNewVehicleValid = this.CheckIfNewVehicleValid();

    this.CheckInfoVehicle2();
    this.CheckIfSameMatriculation();
  }

  ValidateVehicle2Matriculation2() {
    if (this.NewVehicle.Matriculation2 !== undefined) {
      this.NewVehicle.Matriculation2 = this.NewVehicle.Matriculation2.replace(/[^0-9]/g, '');
      if (this.NewVehicle.Matriculation2.length === 3) {
        this.IsVehicle2Matriculation2Valid = true;
        this.V2M2HasError = false;
      } else {
        this.IsVehicle2Matriculation2Valid = false;
        this.V2M2HasError = true;
      }
    } else {
      this.IsVehicle2Matriculation2Valid = false;
      this.V2M2HasError = true;
    }

    this.IsNewVehicleValid = this.CheckIfNewVehicleValid();

    this.CheckInfoVehicle2();
    this.CheckIfSameMatriculation();
  }

  ValidateVehicle2Matriculation3() {
    if (this.NewVehicle.Matriculation3 !== undefined) {
      this.NewVehicle.Matriculation3 = this.NewVehicle.Matriculation3.replace(/[^0-9]/g, '');
      if (this.NewVehicle.Matriculation3.length === 3) {
        this.IsVehicle2Matriculation3Valid = true;
        this.V2M3HasError = false;
      } else {
        this.IsVehicle2Matriculation3Valid = false;
        this.V2M3HasError = true;
      }
    } else {
      this.IsVehicle2Matriculation3Valid = false;
      this.V2M3HasError = true;
    }

    this.IsNewVehicleValid = this.CheckIfNewVehicleValid();

    this.CheckInfoVehicle2();
    this.CheckIfSameMatriculation();
  }

  CheckInfoVehicle2() {
    if (this.SearchNewVehicleClicked) {
      const mat2 = this.NewVehicle.Matriculation1 + this.NewVehicle.Matriculation2 + this.NewVehicle.Matriculation3;
      if (mat2 !== this.SearchedMatriculation2 || this.NewVehicle.Chassis !== this.SearchedChassis2) {
        this.NewVehicleSearchInfo = true;
        this.InfoValidationResult2 = new ValidationResultDto();
        this.InfoValidationResult2.errorCode = 'info2';
        this.ErrorCodeMessageInfo2 = this.ErrorMapper(this.InfoValidationResult2);
      } else {
        this.NewVehicleSearchInfo = false;
      }
    } else {
      this.NewVehicleSearchInfo = false;
    }
  }

  ValidateVehicle2Chassis() {
    if (this.NewVehicle.Chassis !== undefined) {
      this.NewVehicle.Chassis = this.NewVehicle.Chassis.replace(/[^a-zA-Z0-9]/gi, '');
        if (this.NewVehicle.Chassis.length === 4) {
          this.IsVehicle2ChassisValid = true;
          this.Chassis2HasError = false;
        } else {
          this.IsVehicle2ChassisValid = false;
          this.Chassis2HasError = true;
        }
    } else {
      this.IsVehicle2ChassisValid = false;
      this.Chassis2HasError = true;
    }

    this.IsNewVehicleValid = this.CheckIfNewVehicleValid();
    this.CheckInfoVehicle2();
  }

  CheckIfSameMatriculation() {
    const mat1 = this.OldVehicle.Matriculation1 + this.OldVehicle.Matriculation2 + this.OldVehicle.Matriculation3;
    const mat2 = this.NewVehicle.Matriculation1 + this.NewVehicle.Matriculation2 + this.NewVehicle.Matriculation3;
    if (mat1 === mat2) {
      this.IsSearch1Allowed = true;
      this.IsSearch2Allowed = false;
      this.SameVehicleError = true;

      this.NewVehicleSearchSuccess = false;
      this.NewVehicleSearchError = true;
      this.ErrorValidationResult = new ValidationResultDto();
      this.ErrorValidationResult.errorCode = 'same';
      this.ErrorCodeMessageError = this.ErrorMapper(this.ErrorValidationResult);
    } else {
      if (this.SearchedMatriculation1 !== undefined && mat1 === this.SearchedMatriculation1) {
        this.IsSearch1Allowed = true;
        this.IsSearch2Allowed = true;
        this.SameVehicleError = false;
      }
    }
  }

  ClickConfirmButton() {
    this.IsSection1Expanded = false;
    this.IsSection2Expanded = false;
    $('#completion')['collapse']('show');
    this.IsConfirmed = true;
  }

  ClickSubmit() {
    // console.log('click submit was clicked');
    this.LastStep = 'C';
    this.IsBusy = true;
    const status = this.caseStatusEnum.Status_Submitted;
    this.VehicleChangeCaseSubmitResult = new VehicleChangeCaseSubmitResultDto();
    this.VehicleChangeCaseDraftDto = new VehicleChangeCaseDraftDto();
    const mat1 = this.SearchedMatriculation1;
    this.VehicleChangeCaseDraftDto.matriculationNr1 = parseFloat(mat1);
    this.VehicleChangeCaseDraftDto.chassisNr1 = this.SearchedChassis1;
    const mat2 = this.SearchedMatriculation2;
    this.VehicleChangeCaseDraftDto.matriculationNr2 = parseFloat(mat2);
    this.VehicleChangeCaseDraftDto.chassisNr2 = this.SearchedChassis2;
    this.VehicleChangeCaseDraftDto.status = status;
    this.VehicleChangeCaseDraftDto.statusRtd = 0;
    this.VehicleChangeCaseDraftDto.ownerFirstName = this.OldVehicleSearchResult.vehicleOwner.firstName;
    this.VehicleChangeCaseDraftDto.ownerLastName = this.OldVehicleSearchResult.vehicleOwner.name;
    this.VehicleChangeCaseDraftDto.plateCanton = this.OldVehicleSearchResult.numberPlate.canton;
    this.VehicleChangeCaseDraftDto.plateNumber = this.OldVehicleSearchResult.numberPlate.number;
    this.VehicleChangeCaseDraftDto.rtdLocationId = this.SelectedRtd.id;
    this.VehicleChangeCaseDraftDto.comment = this.Comment;
    this.GetDropdownEntries();
    this.VehicleChangeCaseDraftDto.oldPaperValueId = this.OldPaperValueId;
    this.VehicleChangeCaseDraftDto.newPaperValueId = this.NewPaperValueId;
    this.VehicleChangeCaseDraftDto.oldPaper = this.OldPaper;
    this.VehicleChangeCaseDraftDto.newPaper = this.NewPaper;

    if (this.IsEditClicked) {
      this.VehicleChangeCaseDraftDto.id = parseFloat(this.SelectedCaseId);
      this.caseService.SubmitPut(this.VehicleChangeCaseDraftDto).subscribe(result => {
        this.blocker.remove();
        this.IsBusy = false;
        if (result) {
          if (result.vehicleOutOfCirculation.validationResult.type === ValidationResult.Success &&
              result.vehicleInToCirculation.validationResult.type === ValidationResult.Success) {
            this.SelectedCaseId = result.vehicleChangeCase.id;
            this.IsSubmitSuccess = true;
            this.IsSubmitted = true;
            this.ShowPrint = true;
            $('#btnBack').focus();
          } else {
            if (result.vehicleOutOfCirculation.validationResult.type === ValidationResult.Warning ||
                result.vehicleOutOfCirculation.validationResult.type === ValidationResult.Error) {
              this.IsSubmitSuccess = false;
              this.IsSubmitError = true;
              this.ErrorValidationResult = new ValidationResultDto();
              this.ErrorValidationResult.errorCode = result.vehicleOutOfCirculation.validationResult.code;
              this.ErrorCodeMessageError = this.ErrorMapper(this.ErrorValidationResult);
              this.IsBusy = false;
            }
            if (result.vehicleInToCirculation.validationResult.type === ValidationResult.Warning ||
                result.vehicleInToCirculation.validationResult.type === ValidationResult.Error) {
              this.IsSubmitSuccess = false;
              this.IsSubmitError = true;
              this.ErrorValidationResult = new ValidationResultDto();
              this.ErrorValidationResult.errorCode = result.vehicleInToCirculation.validationResult.code;
              this.ErrorCodeMessageError = this.ErrorMapper(this.ErrorValidationResult);
              this.IsBusy = false;
            }
          }
        }
      });
    } else {
      this.caseService.Submit(this.VehicleChangeCaseDraftDto).subscribe(result => {
        this.blocker.remove();
        this.IsBusy = false;
        if (result) {
          if (result.vehicleOutOfCirculation.validationResult.type === ValidationResult.Success &&
              result.vehicleInToCirculation.validationResult.type === ValidationResult.Success) {
            this.SelectedCaseId = result.vehicleChangeCase.id;
            this.IsSubmitSuccess = true;
            this.IsSubmitted = true;
            this.ShowPrint = true;
            $('#btnBack').focus();
          } else {
            if (result.vehicleOutOfCirculation.validationResult.type === ValidationResult.Warning ||
                result.vehicleOutOfCirculation.validationResult.type === ValidationResult.Error) {
              this.IsSubmitSuccess = false;
              this.IsSubmitError = true;
              this.ErrorValidationResult = new ValidationResultDto();
              this.ErrorValidationResult.errorCode = result.vehicleOutOfCirculation.validationResult.code;
              this.ErrorCodeMessageError = this.ErrorMapper(this.ErrorValidationResult);
              this.IsBusy = false;
            }
            if (result.vehicleInToCirculation.validationResult.type === ValidationResult.Warning ||
                result.vehicleInToCirculation.validationResult.type === ValidationResult.Error) {
              this.IsSubmitSuccess = false;
              this.IsSubmitError = true;
              this.ErrorValidationResult = new ValidationResultDto();
              this.ErrorValidationResult.errorCode = result.vehicleInToCirculation.validationResult.code;
              this.ErrorCodeMessageError = this.ErrorMapper(this.ErrorValidationResult);
              this.IsBusy = false;
            }
          }
        }
      });
    }
  }

  ClickSaveAsDraft(isSubmit: boolean) {
    if (isSubmit) {
      this.LastStep = 'C';
      this.isSubmitCase = true;
      this.IsBusy = true;
    }
    this.IsSaveAsDraftBusy = true;
    this.VehicleChangeCaseDraftDto = new VehicleChangeCaseDraftDto();
    if (this.IsOldVehicleValid) {
      let status = this.caseStatusEnum.Status_New;
      let mat1 = this.OldVehicle.Matriculation1 + this.OldVehicle.Matriculation2 + this.OldVehicle.Matriculation3;
      this.VehicleChangeCaseDraftDto.matriculationNr1 = parseFloat(mat1);
      let cha1 = this.OldVehicle.Chassis;
      this.VehicleChangeCaseDraftDto.chassisNr1 = cha1;
      if (this.SearchOldVehicleClicked) {
        mat1 = this.SearchedMatriculation1;
        this.VehicleChangeCaseDraftDto.matriculationNr1 = parseFloat(mat1);
        cha1 = this.SearchedChassis1;
        this.VehicleChangeCaseDraftDto.chassisNr1 = cha1;
        status = this.caseStatusEnum.Status_InProgress;
      }
      if (this.OldVehicleError || this.NewVehicleSearchError) {
        status = this.caseStatusEnum.Status_Rejected;
      }

      if (this.NewVehicle.Matriculation1 !== undefined && this.NewVehicle.Matriculation2 !== undefined &&
        this.NewVehicle.Matriculation3 !== undefined) {
        let mat2 = this.NewVehicle.Matriculation1 + this.NewVehicle.Matriculation2 + this.NewVehicle.Matriculation3;
        this.VehicleChangeCaseDraftDto.matriculationNr2 = parseFloat(mat2);
        if (this.SearchNewVehicleClicked) {
          mat2 = this.SearchedMatriculation2;
          this.VehicleChangeCaseDraftDto.matriculationNr2 = parseFloat(mat2);
        }
      } else {
        if (this.SearchNewVehicleClicked) {
          const mat2 = this.SearchedMatriculation2;
          this.VehicleChangeCaseDraftDto.matriculationNr2 = parseFloat(mat2);
        } else  {
          this.VehicleChangeCaseDraftDto.matriculationNr2 = 0;
        }
      }
      if (this.NewVehicle.Chassis !== undefined) {
        let cha2 = this.NewVehicle.Chassis;
        this.VehicleChangeCaseDraftDto.chassisNr2 = cha2;
        if (this.SearchNewVehicleClicked) {
          cha2 = this.SearchedChassis2;
          this.VehicleChangeCaseDraftDto.chassisNr2 = cha2;
        }
      } else {
        if (this.SearchNewVehicleClicked) {
          const cha2 = this.SearchedChassis2;
          this.VehicleChangeCaseDraftDto.chassisNr2 = cha2;
        } else {
          this.VehicleChangeCaseDraftDto.chassisNr2 = '';
        }
      }
      this.VehicleChangeCaseDraftDto.status = status;
      this.VehicleChangeCaseDraftDto.statusRtd = 0;
      if (this.OldVehicleSearchResult !== undefined && this.OldVehicleSearchResult.vehicleOwner !== undefined) {
        this.VehicleChangeCaseDraftDto.ownerFirstName = this.OldVehicleSearchResult.vehicleOwner.firstName;
        this.VehicleChangeCaseDraftDto.ownerLastName = this.OldVehicleSearchResult.vehicleOwner.name;
      } else {
        this.VehicleChangeCaseDraftDto.ownerFirstName = '';
        this.VehicleChangeCaseDraftDto.ownerLastName = '';
      }
      if (this.OldVehicleSearchResult !== undefined && this.OldVehicleSearchResult.numberPlate !== undefined) {
        this.VehicleChangeCaseDraftDto.plateCanton = this.OldVehicleSearchResult.numberPlate.canton;
        this.VehicleChangeCaseDraftDto.plateNumber = this.OldVehicleSearchResult.numberPlate.number;
      } else {
        this.VehicleChangeCaseDraftDto.plateCanton = '';
        this.VehicleChangeCaseDraftDto.plateNumber = 0;
      }

      this.VehicleChangeCaseDraftDto.rtdLocationId = this.SelectedRtd.id;
      this.VehicleChangeCaseDraftDto.comment = this.Comment;

      this.GetDropdownEntries();
      this.VehicleChangeCaseDraftDto.oldPaperValueId = this.OldPaperValueId;
      this.VehicleChangeCaseDraftDto.newPaperValueId = this.NewPaperValueId;
      this.VehicleChangeCaseDraftDto.oldPaper = this.OldPaper;
      this.VehicleChangeCaseDraftDto.newPaper = this.NewPaper;

      if (!this.isSubmitCase) {
          this.isUploadingAttachment = true;
      }
      if (this.SelectedCaseId !== undefined && this.SelectedCaseId !== null && this.SelectedCaseId !== '') {
        this.VehicleChangeCaseDraftDto.id = parseFloat(this.SelectedCaseId);
        this.caseService.Put(this.VehicleChangeCaseDraftDto).subscribe(result => {
            // console.log('Result from Put', result);
          this.uploadAttachments(parseFloat(this.SelectedCaseId));
          this.isSaveAsDraftRejectedClicked = false;
        });
      } else {
        this.caseService.Post(this.VehicleChangeCaseDraftDto).subscribe((result: {id: string}) => {
          // console.log('Result from Post', result);
          this.SelectedCaseId = result.id;
          this.uploadAttachments(parseFloat(this.SelectedCaseId));
          this.isSaveAsDraftRejectedClicked = false;
        });
      }
    }
  }

  GetDropdownEntries() {
    if (this.IsSendOldVehicleConfigShown) {
      this.OldPaperValueId = this.selectedOptionCancel;
    }
    if (this.currentUser !== undefined) {
      this.EstablishConfigLanguageOld();
    } else {
      this.SetConfigToGermanOld();
    }

    if (this.IsSendNewVehicleConfigShown) {
      this.NewPaperValueId = this.selectedOptionNew;
    }
    if (this.currentUser !== undefined) {
      this.EstablishConfigLanguageNew();
    } else {
      this.SetConfigToGermanNew();
    }
  }

  ClickGoBack() {
    if (this.errBE !== undefined && this.errBE['code'] !== undefined &&
        (this.errBE['code'] === ErrorCodeCaseK.VehicleOutOfCirculationAlreadyInAnotherSubmittedCase ||
        this.errBE['code'] === ErrorCodeCaseK.VehicleIntoCirculationAlreadyInAnotherSubmittedCase ||
        this.errBE['code'] === ErrorCodeCaseK.VehicleChangeCaseNotFound)) {
      this.isSaveAsDraftRejectedClicked = false;
      this.selectedCaseId = '';
      // $state.go('vehicleChangeCaseOverview');
      this._router.navigate(['vehicleChangeCaseOverview']);
    } else {
      if (this.OldVehicleError || this.NewVehicleSearchError) {
        this.isSaveAsDraftRejectedClicked = true;
        this.ClickSaveAsDraft(false);
      } else {
        this.isSaveAsDraftRejectedClicked = false;
        this.selectedCaseId = '';
        // $state.go('vehicleChangeCaseOverview');
        this._router.navigate(['vehicleChangeCaseOverview']);
      }
    }
  }

  ClickPrint() {
    this.IsPrintBusy = true;
    let windowObjectReference;
    const strWindowFeatures = 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes';
    windowObjectReference = window.open(this._egovService.getEnv() + '/egov/api/VehicleChangeCase/RegistrationCertificate/'
                             + this.SelectedCaseId, 'PrintWindow', strWindowFeatures);
    this.IsPrintBusy = false;
    return false;
  }

  addFile(filesToUpload, sectionIdentifier) {
    const fileIdCounter = 0;
  }

  viewContentLoaded() {
    this._route.params.subscribe(info => {

      this.GetVehicleChangeConfiguration();
      this.GetRtdLocation();
      this.IsSubmitSuccess = false;

      if (info['selectedCase']) {
        this.SelectedCaseId = info['selectedCase'];
        this.getSavedFiles(parseFloat(this.SelectedCaseId));
      } else {
        this.SelectedCaseId = '';
      }
      this.GetVehicleChangeCase();
      this.RefreshPageTitle();

      this._egovService.languageSwitched.subscribe(
        (language: string) => {
          this.RefreshTranslations();
          this.RefreshPageTitle();
          if (this.errBE !== undefined && this.errBE['code'] !== undefined && this.errBE['code'] !== '') {
              const errorObj: ErrorCodeDto = <ErrorCodeDto> this.caseErrorService.convertCaseError(this.errBE['code'], this.errBE['text']);
              this.ErrorCodeMessageError = errorObj.fe_message;
          }
          this._egovService.setConfirmText(this.localizationResources.Message_NavigateAway);
         }
      );
    });
  }

  locationChangeStart(event, newUrl: string, oldUrl: string) {
    if (oldUrl.indexOf('newVehicleChangeCase') >= 0) {
        const answer = confirm(this.localizationResources.Message_NavigateAway);
        if (!answer) {
            event.preventDefault();
        }
    }
  }

  ngOnDestroy() {
    //
  }

  SelectOptionNew(option) {
    $('#newRegDropdown')['collapse']('hide');
    if (option === '2') {
      this.selectedOptionNew = 2;
      this.selectedOptionNewLabel = this.localizationResources.Option_Customer;
    } else if (option === '1') {
      this.selectedOptionNew = 1;
      this.selectedOptionNewLabel = this.localizationResources.Option_Garage;
    }
  }

  SelectOptionCance(option) {
    $('#canRegDropdown')['collapse']('hide');
    if (option === '2') {
      this.selectedOptionCancel = 2;
      this.selectedOptionCancelLabel = this.localizationResources.Option_Customer;
    } else if (option === '1') {
      this.selectedOptionCancel = 1;
      this.selectedOptionCancelLabel = this.localizationResources.Option_Garage;
    }
  }

  RefreshTranslations() {
    this.ErrorCodeMessageInfo1 = this.ErrorMapper(this.InfoValidationResult1);
    this.ErrorCodeMessageInfo2 = this.ErrorMapper(this.InfoValidationResult2);
    this.ErrorCodeMessageWarning = this.ErrorMapper(this.WarningValidationResult);
    this.ErrorCodeMessageError = this.ErrorMapper(this.ErrorValidationResult);

    if (this.selectedOptionNew === 2) {
      this.selectedOptionNewLabel = this.localizationResources.Option_Customer;
    } else if (this.selectedOptionNew === 1) {
      this.selectedOptionNewLabel = this.localizationResources.Option_Garage;
    }

    if (this.selectedOptionCancel === 2) {
      this.selectedOptionCancelLabel = this.localizationResources.Option_Customer;
    } else if (this.selectedOptionCancel === 1) {
      this.selectedOptionCancelLabel = this.localizationResources.Option_Garage;
    }
  }

  RefreshPageTitle() {
    this.pageTitle = this.localizationResources.Label_NewVehicleChange;
    this._egovService.titleDefined.next(this.pageTitle);
  }

  ErrorMapper(validationResult: ValidationResultDto) {
    return this.caseErrorService.mapError(validationResult, this.OldVehicleInfo, this.NewVehicleSearchInfo);
  }

}


