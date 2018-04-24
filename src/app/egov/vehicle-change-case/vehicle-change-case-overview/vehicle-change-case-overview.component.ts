import { Subject } from 'rxjs/Subject';
import { ErrorCodeDto } from './../../../shared/dto/error-code-dto';
import { element } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CaseStatusEnum } from './../../../shared/enum/case-status.enum';
import { UserService } from './../../../shared/service/user.service';
import { ErrorHandlerService } from './../../../shared/service/error-handler.service';
import { UserRole } from './../../../shared/enum/user-role.enum';
import { OverviewService } from './../../../shared/service/overview.service';
import { ErniJsUtilsBlockControl } from './../../../shared/class/utils';
import { OverviewErrorService } from './../../../shared/service/overview-error.service';
import { VehicleChangeCaseDto } from './../../../shared/dto/vehicle-change-case-dto';
import { ILanguage } from './../../../shared/interface/ilanguage';
import { LabelEnum } from './../../../shared/enum/label.enum';
import { GlobalService } from './../../../shared/service/global.service';
import { Component, OnInit, Inject, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { UserDto } from '../../../shared/dto/user-dto';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';
// import * as $ from 'jquery';

@Component({
  selector: 'app-vehicle-change-case-overview',
  templateUrl: './vehicle-change-case-overview.component.html',
  styleUrls: ['./vehicle-change-case-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VehicleChangeCaseOverviewComponent implements OnInit {
  language: string;
  pageTitle: string;
  localizationResources: ILanguage;
  private $overviewTbl = $('#overviewTable');
  private overviewDataTable: DataTables.Api;
  private blocker: any;
  links: Array<{}>;
  isDownloadingAttachment: boolean;
  attachmentCount: number;
  HasSelected: boolean;
  VehicleChangeCaseList: VehicleChangeCaseDto[];
  OverviewError: boolean;
  errBE: string;
  isDisabled: boolean;
  userRoles: string;
  SelectedStatusCode: CaseStatusEnum;
  selectedCaseId: string;
  SelectedCaseId: string; // duplicate from above
  IsDeleteBusy: boolean;
  currentUser: {};
  IsBusy = false;
  ErrorCodeMessageError: string;

  constructor(private _egovService: GlobalService,
              private _overviewService: OverviewService,
              private _errorService: ErrorHandlerService,
              private _userService: UserService,
              private _router: Router,
              private _route: ActivatedRoute,
              private _http: HttpClient,
              private _sanitizer: DomSanitizer,
              @Inject(DOCUMENT) private document: any,
              private _overviewErrorService: OverviewErrorService,
              private _location: Location,
              private _translate: TranslateService) { }

  ngOnInit() {

    this.language = 'en';
    this._egovService.languageSwitched.subscribe(
      (language: string) => {
        this.language = language;

        this.RefreshPageTitle();
        if (this.errBE !== undefined && this.errBE['code'] !== undefined && this.errBE['code'] !== '') {
            const errorObj: ErrorCodeDto =
              <ErrorCodeDto> this._overviewErrorService.convertOverviewError(this.errBE['code'], this.errBE['text']);
            this.ErrorCodeMessageError = errorObj.fe_message;
        }

        this._translate.get(this.localizationResources.DataTable_Label_Search).subscribe((res: string) => {
            const searchText = res;
              // update search translation using dom traversing
              if ($('#overviewTable_filter label')[0]) {
                const fChild = $('#overviewTable_filter label')[0].firstChild;
                fChild.textContent = res;
              }
              this.ParseData();
        });
       }
    );

    this._egovService.titleDefined.next(LabelEnum.Label_OverviewVehicleChangeCases);

    this.localizationResources = LabelEnum;

    this.blocker = new ErniJsUtilsBlockControl(this.$overviewTbl, false);
    this.links = [{}];
    this.isDownloadingAttachment = false;
    this.attachmentCount = 0;

    this.HasSelected = false;
    this.VehicleChangeCaseList = new Array<VehicleChangeCaseDto>();
    this.OverviewError = false;
    this.errBE = '{}';
    this.isDisabled = true;

    const overviewErrorService = new OverviewErrorService(); // test here

    this._egovService.userDBLoaded.subscribe(() => {
      this.SetUpUserRole();
    });

    this._route.url.subscribe((newLocation) => {
      this.SetUpUserRole();
      // const actualLocation = sessionStorage.getItem('actualLocation');
      // Please check this
      // if (actualLocation !== undefined && actualLocation === newLocation.join()) {
      //   this.SetUpUserRole();
      // }
    });

    this.viewContentLoaded();

  }

  ClickEditButton() {
    if (this.userRoles !== undefined && this.userRoles !== null) {
        if (this.userRoles.indexOf(UserRole.Clerks) > 0 || this.userRoles.indexOf(UserRole.ClerkAdmins) > 0) {
            return;
        }
    }
    if (this.SelectedStatusCode === CaseStatusEnum.Status_New
        || this.SelectedStatusCode === CaseStatusEnum.Status_InProgress
        || this.SelectedStatusCode === CaseStatusEnum.Status_Rejected) {

        this.selectedCaseId = this.SelectedCaseId;
        const jsonOfSelectedCase = this.SelectedCaseId;
        // $state.go('newVehicleChangeCase', { selectedCase: jsonOfSelectedCase });
        this._router.navigate(['newVehicleChangeCase', jsonOfSelectedCase]);
    }
  }

  ClickDeleteButton() {
    this.OverviewError = false;
    if (this.userRoles !== undefined && this.userRoles !== null) {
      if (this.userRoles.indexOf(UserRole.Clerks) > 0 || this.userRoles.indexOf(UserRole.ClerkAdmins) > 0) {
        return;
      }
    }

    if (this.SelectedStatusCode === CaseStatusEnum.Status_New
         || this.SelectedStatusCode === CaseStatusEnum.Status_InProgress
         || this.SelectedStatusCode === CaseStatusEnum.Status_Rejected
    ) {

      this._translate.get(this.localizationResources.Message_DeleteCase).subscribe(str => {
        const answer = confirm(str);
        if (!answer) {
          event.preventDefault();
        } else {
          this.IsDeleteBusy = true;
          this._overviewService.Delete(this.SelectedCaseId).subscribe(result => {
            const vehicleList = this.VehicleChangeCaseList.filter(a => a.id.toString() === this.SelectedCaseId.toString());
            if (vehicleList !== undefined && vehicleList.length > 0) {
                const idx = this.VehicleChangeCaseList.indexOf(vehicleList[0]);
                this.VehicleChangeCaseList.splice(idx, 1);
                this.ParseData();
            }
            this.OverviewError = false;
            this.IsDeleteBusy = false;
          });
        }
      });
    }
  }

  ClickPrintButton() {
    if (this.SelectedStatusCode === CaseStatusEnum.Status_Cancelled
      || this.SelectedStatusCode === CaseStatusEnum.Status_Submitted
      || this.SelectedStatusCode === CaseStatusEnum.Status_Completed
    ) {
        let windowObjectReference;
        const strWindowFeatures = 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes';
        windowObjectReference = window.open(this._egovService.getEnv()
          + '/egov/api/VehicleChangeCase/RegistrationCertificate/'
          + this.SelectedCaseId, 'PrintWindow', strWindowFeatures);
        return false;
    }
  }

  ClickNewVehicleChangeCase() {
    const jsonOfSelectedCase = '';
    this.SelectedCaseId = '';
    this.selectedCaseId = '';
    // $state.go('newVehicleChangeCase', { selectedCase: jsonOfSelectedCase });
    this._router.navigate(['newVehicleChangeCase', jsonOfSelectedCase]);
  }

  SetUpUserRole() {
    if (sessionStorage) {
        this.userRoles = sessionStorage.getItem('userRoles');
        if (this.userRoles !== undefined && this.userRoles != null) {
            if (this.userRoles.indexOf(UserRole.Dealers) > 0 || this.userRoles.indexOf(UserRole.DealerAdmins) !== -1) {
                this.isDisabled = false;
            }
            if (this.userRoles.indexOf(UserRole.Clerks) > 0 || this.userRoles.indexOf(UserRole.ClerkAdmins) > 0) {
                this.isDisabled = true;
                $('.overview-edit-icon').removeClass('highlight-icon');
                $('.overview-edit-icon').addClass('unhighlight-icon');
                $('.overview-delete-icon').removeClass('highlight-icon');
                $('.overview-delete-icon').addClass('unhighlight-icon');
            }
        } else {
            this.GetUserFromDB();
        }
    } else {
        this.GetUserFromDB();
    }
  }

  GetUserFromDB() {
    this._userService.getUser().subscribe((result: UserDto) => {
      sessionStorage.setItem('username', result.name);
      this.currentUser = result;
      this.userRoles = JSON.stringify(result.roles);
      sessionStorage.setItem('userRoles', JSON.stringify(result.roles));
      if (this.userRoles !== undefined && this.userRoles != null) {
          if (this.userRoles.indexOf(UserRole.Dealers) > 0 || this.userRoles.indexOf(UserRole.DealerAdmins) !== -1) {
              this.isDisabled = false;
          }
          if (this.userRoles.indexOf(UserRole.Clerks) > 0 || this.userRoles.indexOf(UserRole.ClerkAdmins) > 0) {
              this.isDisabled = true;
              $('.overview-edit-icon').removeClass('highlight-icon');
              $('.overview-edit-icon').addClass('unhighlight-icon');
              $('.overview-delete-icon').removeClass('highlight-icon');
              $('.overview-delete-icon').addClass('unhighlight-icon');
          }
      }
    });
  }

  downloadAttachment(caseId: number) {
    this.links.length = 0; // reset links
    this.isDownloadingAttachment = true;
    $('.show-spinner-' + caseId).show();
    this.document.getElementById('isDownloadingAttachment' + caseId).style = 'display: none;';

    this._overviewService.GetSavedAttachmentByCaseId(caseId).subscribe(
      (response) => {
        this.attachmentCount = response.length;
        if (response.length) {
            for (let f = 0; f < response.length; f++) {
                if (response[f]['id'] && response[f]['name']) {
                    const filename = response[f]['name'];
                    let type = '';
                    // Create pattern for getting the extension string
                    // regex flags -- Global, Multiline, Insensitive
                    const fileExtensionPattern = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gmi;
                    const extension = filename.match(fileExtensionPattern)[0].toLowerCase();
                    if (extension === '.pdf') {
                        type = 'application/pdf';
                    } else if (extension === '.doc') {
                        type = 'application/msword';
                    } else if (extension === '.docx') {
                        type = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                    } else if (extension === '.xls') {
                        type = 'application/vnd.ms-excel';
                    } else if (extension === '.xlsx') {
                        type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                    } else if (extension === '.jpg') {
                        type = 'image/jpeg';
                    } else if (extension === '.jpeg') {
                        type = 'image/jpeg';
                    } else if (extension === '.bmp') {
                        type = 'image/bmp';
                    } else if (extension === '.png') {
                        type = 'image/png';
                    }

                    const pdfURL = this._egovService.getEnv() + '/egov/api/VehicleChangeCaseAttachment/Download/' + response[f]['id'];
                    const options = {
                      responseType: 'blob' as 'json'
                    };

                    const req = this._http.get<any>(pdfURL, options)
                    .subscribe((responseData) => {
                        this.links.length = 0;
                        // const file = new Blob([responseData.data], {
                        //     type: type // must have a type
                        // }),

                        const file = responseData;

                        const url = window.URL || window['webkitURL'];
                        // console.log('url', $sce.trustAsResourceUrl(url.createObjectURL(file)));
                        console.log('type', type, file);
                        const fileLink = {
                            url: url.createObjectURL(file),
                            filename: filename
                        };
                        console.log('file link', responseData);
                        this.links.push(fileLink);
                        // let isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                        // navigator.userAgent && !navigator.userAgent.match('CriOS');
                        const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
                        // console.log('is iOS iPad iPhone iPod 2', iOS);
                        if (window.navigator.msSaveOrOpenBlob) { // for IE and Edge
                            // console.log('download for IE or Edge');
                            window.navigator.msSaveBlob(file, filename);
                        } else if (iOS) { // for Safari browsers and devices using safari as a wrapper
                            // href download attribute is not supported by safari browsers/devices
                            // Open in new tab
                            console.log('download for iOS devices');
                            const reader = new FileReader();
                            reader.onloadend = function(e) {
                                // window.location.href = reader.result;
                                // console.log('reader result');
                                const iOSwindow = window.open(reader.result);
                                setTimeout(() => {
                                    if (iOSwindow && iOSwindow.document) {
                                        iOSwindow.document.title = filename;
                                    }
                                }, 500);
                            };
                            reader.readAsDataURL(file);
                        } else {
                            const anchorEl = this.document.createElement('a');
                            anchorEl.href = url.createObjectURL(file);
                            anchorEl.download = filename;

                            const evt = this.document.createEvent('MouseEvents');
                            evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                            anchorEl.dispatchEvent(evt);
                        }
                    }, (err) => {
                      // Ignore error
                    }, () => {
                      // Finally/Completed equivalent
                      // Execute logic independent of success/error
                      this.attachmentCount -= 1;
                      if (this.attachmentCount === 0) {
                          // console.log("Downloading...");
                          this.isDownloadingAttachment = false;
                          $('.show-spinner-' + caseId).hide();
                          this.document.getElementById('isDownloadingAttachment' + caseId).style = 'display: inline-block;';
                      }
                    });
                }
            }
        } else {
            this.isDownloadingAttachment = false;
            $('.show-spinner-' + caseId).hide();
            this.document.getElementById('isDownloadingAttachment' + caseId).style = 'display: inline-block;';
        }
      }
    );
  }

  Refresh() {
    this.IsBusy = true;
    this.OverviewError = false;
    this._overviewService.Get().subscribe(result => {
      if (result !== undefined && result !== null) {
        result.sort(
          function(a, b){
            if (a.status !== b.status) {
              if (a.status < b.status) {
                  return -1;
              }
              if (a.status > b.status) {
                  return 1;
              }
            } else {
              if (new Date(b.createDate).getTime() < new Date(a.createDate).getTime()) {
                  return -1;
              }
              if (new Date(b.createDate).getTime() > new Date(a.createDate).getTime()) {
                  return 1;
              } else {
                  return 0;
              }
            }
          }
        );
        this.VehicleChangeCaseList = result;

        this.OverviewError = false;
        this.ParseData();
      }
      this.blocker.remove();
      this.IsBusy = false;
    });
  }


  viewContentLoaded() {
    this.selectedCaseId = '';
    this._translate.get(this.localizationResources.DataTable_Label_Search).subscribe((res: string) => {
      const searchText = res;
      this._translate.get(this.localizationResources.DataTable_Label_EmptyTable).subscribe((res2: string) => {
        const emptyTable = res2;
        this.initTableData(searchText, emptyTable);
      });
    });
  }

  initTableData(searchText: string, emptyTable: string) {

    const setting = <DataTables.Settings>{};
    setting.language = <DataTables.LanguageSettings>{};
    setting.language.emptyTable = emptyTable;
    setting.language.search = searchText;
    // setting.language.info = this.localizationResources.DataTable_Label_Info;
    // setting.language.infoEmpty = infoEmpty;
    // setting.language.infoFiltered = this.localizationResources.DataTable_Label_InfoFiltered;
    // setting.language.lengthMenu = this.localizationResources.DataTable_Label_LengthMenu;
    // setting.language.loadingRecords = this.localizationResources.DataTable_Label_LoadingRecords;
    // setting.language.processing = this.localizationResources.DataTable_Label_Processing;
    // setting.language.zeroRecords = this.localizationResources.DataTable_Label_ZeroRecords;
    setting.language.paginate = <DataTables.LanguagePaginateSettings>{};
    // setting.language.paginate.first = this.localizationResources.Page_First;
    setting.language.paginate.previous = '<'; // this.localizationResources.Page_Previous;
    setting.language.paginate.next = '>'; // this.localizationResources.Page_Next;
    // setting.language.paginate.last = this.localizationResources.Page_Last;
    setting.paging = true;
    setting.pageLength = 10;
    // setting.language.url = 'http://localhost:4201/assets/i18n/de.json';

    setting.order = [];
    setting.drawCallback = () => {
        // (this.$overviewTbl)(this);
        this.$overviewTbl = $('#overviewTable');
        this.$overviewTbl.find('tr').removeClass('bg-tbl-selected');
        this.SelectedCaseId = '';
        this.HasSelected = false;
        $('.overview-edit-icon').removeClass('highlight-icon');
        $('.overview-edit-icon').addClass('unhighlight-icon');
        $('.overview-delete-icon').removeClass('highlight-icon');
        $('.overview-delete-icon').addClass('unhighlight-icon');
        $('.overview-print-icon').removeClass('highlight-icon');
        $('.overview-print-icon').addClass('unhighlight-icon');
        $('.caseTableItem').parents('tr').on('click', (e) => {
            const data = $(e.target).parents('tr').data();
            this.$overviewTbl.find('tr').removeClass('bg-tbl-selected');
            $(e.target).parents('tr').addClass('bg-tbl-selected');
            const $firstCol = $($(e.target).parents('tr')[0].children[0].children[0]);
            this.SelectedCaseId = $firstCol.attr('id');

            // workaround on (click) event problem
            if (this.SelectedCaseId && $(e.target)[0] && $(e.target)[0].className === 'content-icon ion-ios-download') {
              console.log('i class and id', $(e.target)[0].className, this.SelectedCaseId);
              this.downloadAttachment(<any>this.SelectedCaseId);
            }

            this.HasSelected = true;
            this.SelectedStatusCode = $firstCol.data('status');
            if (this.SelectedStatusCode === CaseStatusEnum.Status_Cancelled
               || this.SelectedStatusCode === CaseStatusEnum.Status_Submitted
               || this.SelectedStatusCode === CaseStatusEnum.Status_Completed) {
                $('.overview-edit-icon').removeClass('highlight-icon');
                $('.overview-edit-icon').addClass('unhighlight-icon');
                $('.overview-delete-icon').removeClass('highlight-icon');
                $('.overview-delete-icon').addClass('unhighlight-icon');
                $('.overview-print-icon').removeClass('unhighlight-icon');
                $('.overview-print-icon').addClass('highlight-icon');
            } else {
                $('.overview-edit-icon').removeClass('unhighlight-icon');
                $('.overview-edit-icon').addClass('highlight-icon');
                $('.overview-delete-icon').removeClass('unhighlight-icon');
                $('.overview-delete-icon').addClass('highlight-icon');
                $('.overview-print-icon').removeClass('highlight-icon');
                $('.overview-print-icon').addClass('unhighlight-icon');
            }
            this.SetUpUserRole();
        });
        $('.caseTableItem').parents('tr').on('dblclick', (e) => {
            const data = $(e.target).parents('tr').data();
            this.$overviewTbl.find('tr').removeClass('bg-tbl-selected');
            $(e.target).parents('tr').addClass('bg-tbl-selected');
            const $firstCol = $($(e.target).parents('tr')[0].children[0].children[0]);
            this.SelectedCaseId = $firstCol.attr('id');
            this.HasSelected = true;
            this.SelectedStatusCode = $firstCol.data('status');
            if (this.SelectedStatusCode === CaseStatusEnum.Status_Cancelled
              || this.SelectedStatusCode === CaseStatusEnum.Status_Submitted
              || this.SelectedStatusCode === CaseStatusEnum.Status_Completed) {
                $('.overview-edit-icon').removeClass('highlight-icon');
                $('.overview-edit-icon').addClass('unhighlight-icon');
                $('.overview-delete-icon').removeClass('highlight-icon');
                $('.overview-delete-icon').addClass('unhighlight-icon');
                $('.overview-print-icon').removeClass('unhighlight-icon');
                $('.overview-print-icon').addClass('highlight-icon');
            } else {
                $('.overview-edit-icon').removeClass('unhighlight-icon');
                $('.overview-edit-icon').addClass('highlight-icon');
                $('.overview-delete-icon').removeClass('unhighlight-icon');
                $('.overview-delete-icon').addClass('highlight-icon');
                $('.overview-print-icon').removeClass('highlight-icon');
                $('.overview-print-icon').addClass('unhighlight-icon');
                this.ClickEditButton();
            }
            this.SetUpUserRole();
        });

    };

    this.$overviewTbl = $('#overviewTable');
    this.overviewDataTable = this.$overviewTbl.DataTable(setting);
    $('#overviewTable_length').hide();

    this.Refresh();
  }

  ParseData() {
    if (this.overviewDataTable) {
        this.overviewDataTable.clear();
    }
    if (this.VehicleChangeCaseList !== undefined) {
        this.VehicleChangeCaseList.forEach(item => {
            let displayStatusRTD = this._egovService.getCaseStatusRTDLabel(item.statusRtd);
            let displayStatus = this._egovService.getCaseStatusLabel(item.status);
            this._translate.get(displayStatusRTD).subscribe(res => {
                displayStatusRTD = res;
                this._translate.get(displayStatus).subscribe(dstatus => {
                    displayStatus = dstatus;
                    const displayMatriculation1 = this.FormatMatriculation(item.matriculationNr1);
                    const displayMatriculation2 = this.FormatMatriculation(item.matriculationNr2);
                    const displayNumberPlate = this.FormatNumberPlate(item.plateCanton, item.plateNumber);
                    const displayOwner = this.FormatOwner(item.ownerFirstName, item.ownerLastName);

                    this.overviewDataTable.row.add([
                        `<span id='` + item.id + `' data-status='` + item.status + `' class='caseTableItem' >` 
                            + displayStatusRTD + `</span>`,
                        displayStatus,
                        displayNumberPlate,
                        displayMatriculation1,
                        displayMatriculation2,
                        displayOwner,
                        (item.attachmentsCount && item.attachmentsCount > 0) ?
                          `<div class='attachment-icon'><i style='display: none; margin-top: 10px;' class='fa fa-spin `
                          + `fa-spinner show-spinner-` + item.id + `'></i><i id='isDownloadingAttachment` + item.id + `'`
                          + `class='content-icon ion-ios-download'></i></div>`
                           : `<div>&nbsp;</div>`
                    ]);
                });
            });
        });
    }
    if (this.overviewDataTable) {
        this.overviewDataTable.draw();
    }
  }

  RefreshPageTitle() {
    this.pageTitle = this.localizationResources.Label_OverviewVehicleChangeCases;
    this._egovService.titleDefined.next(this.pageTitle);
  }

  FormatMatriculation(matriculation: number) {
    if (matriculation !== undefined) {
        const mat = matriculation.toString();
        if (mat !== undefined && mat.length === 9) {
            return mat.slice(0, 3) + '.' + mat.slice(3, 6) + '.' + mat.slice(6, 9);
        } else if (mat !== '0') {
            let paddedMat = '';
            for (let i = 0; i < 9 - mat.length; i++) {
                paddedMat += '0';
            }
            const newMat = paddedMat.concat(mat);
            return newMat.slice(0, 3) + '.' + newMat.slice(3, 6) + '.' + newMat.slice(6, 9);
        } else {
            return '';
        }
    } else {
        return '';
    }
  }

  FormatNumberPlate(plateCanton: string, plateNumber: number) {
    if (plateCanton !== undefined && plateNumber !== 0) {
        return plateCanton + ' ' + plateNumber;
    } else {
        return '';
    }
  }

  FormatOwner(ownerFirstName: string, ownerLastName: string) {
    if (ownerFirstName !== undefined && ownerLastName !== undefined) {
        return ownerFirstName + ' ' + ownerLastName;
    } else if (ownerLastName !== undefined) {
        return ownerLastName;
    } else if (ownerFirstName !== undefined) {
        return ownerFirstName;
    } else {
        return '';
    }
  }

}
