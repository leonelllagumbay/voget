import { LabelEnum } from './../../../shared/enum/label.enum';
import { ChangePasswordDto } from './../../../shared/dto/change-password-dto';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../../shared/service/error-handler.service';
import { UserService } from '../../../shared/service/user.service';
import { GlobalService } from '../../../shared/service/global.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { ErrorCodeDto } from '../../../shared/dto/error-code-dto';
import { ILanguage } from '../../../shared/interface/ilanguage';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  errBE = {};
  IsBusy: boolean;
  ErrorCodeMessageError: string;
  isDisabledBtn = true;
  isSuccess = false;
  isInitialLoad = true;
  hasError = false;
  hasWarning = false;
  showIconWarningNew = false;
  showIconWarningConfirm = false;
  isNewPassSuccess = false;
  isConfirmPassSuccess = false;
  showIconWarningExisting = false;
  isSecurityMet = true;
  ChangePasswordDto: ChangePasswordDto;
  securityMessage: string;
  localizationResources: ILanguage;
  pageTitle: string;

  constructor(private _errorService: ErrorHandlerService, private _userService: UserService,
              private _egovService: GlobalService) { }

  ngOnInit() {

    this.localizationResources = LabelEnum;
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

        this.IsBusy = false;
        this.isSuccess = false;
        console.log('this.ErrorCode', er);

        if (code) {
            this.hasError = true;
            const errorObj: ErrorCodeDto = <ErrorCodeDto> this._errorService.convertError(code, text);
            this.ErrorCodeMessageError = errorObj.fe_message;
        }
      }
    });

    this.ChangePasswordDto = new ChangePasswordDto();
    this.RefreshPageTitle();
    this.Refresh();

    this._egovService.languageSwitched.subscribe(
      (language: string) => {
        this.RefreshTranslations();
        this.RefreshPageTitle();
      }
    );
  }

  ChangePassword() {
    this._userService.ChangePassword(this.ChangePasswordDto).subscribe(result => {
        this.isSuccess = true;
        this.ChangePasswordDto.currentPassword = '';
        this.ChangePasswordDto.newPassword = '';
        this.ChangePasswordDto.newPasswordConfirm = '';
        this.isDisabledBtn = true;
        this.isInitialLoad = true;
        this.isNewPassSuccess = false;
        this.isConfirmPassSuccess = false;
        this.IsBusy = false;
    });
  }

  validatePassword() {
    this.hasError = false; // hide error msg when fields are empty
    this.isSuccess = false; // hide succes msg when fields are empty
    this.isSecurityMet = true; // hide error msg when fields are empty


    if (this.ChangePasswordDto.newPassword &&
       this.ChangePasswordDto.newPassword.length > 0 &&
       this.ChangePasswordDto.newPassword !== undefined &&
        this.ChangePasswordDto.newPasswordConfirm && this.ChangePasswordDto.newPasswordConfirm.length > 0 &&
        this.ChangePasswordDto.newPasswordConfirm !== undefined &&
        this.ChangePasswordDto.currentPassword && this.ChangePasswordDto.currentPassword.length > 0 &&
        this.ChangePasswordDto.currentPassword !== undefined) {

        // console.log("all fields have data");
        // $scope.isDisabledBtn = false;
        this.showIconWarningExisting = false;
        this.showIconWarningNew = false;
        this.showIconWarningConfirm = false;

        const pass1String = this.ChangePasswordDto.newPassword;
        const pass2String = this.ChangePasswordDto.newPasswordConfirm;
        // console.log($scope.ChangePasswordDto.newPassword, $scope.ChangePasswordDto.newPasswordConfirm);
        this.securityMessage = '';

        const re = new RegExp('^(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{7,}');

        if (re.test(pass1String) || re.test(pass2String)) { // if Security Requirements Passed
            this.isNewPassSuccess = true;
            this.isConfirmPassSuccess = true;

            this.isSecurityMet = true;
            this.securityMessage = '';

            if (this.ChangePasswordDto.newPassword !== this.ChangePasswordDto.newPasswordConfirm) {
              this.isDisabledBtn = true;
              this.hasWarning = true;
              this.showIconWarningNew = true;
              this.showIconWarningConfirm = true;
              this.isNewPassSuccess = false; // remove green border
              this.isConfirmPassSuccess = false; // remove green border
            } else {
              this.isDisabledBtn = false;
              this.hasWarning = false;
              this.showIconWarningNew = false;
              this.showIconWarningConfirm = false;
              this.isNewPassSuccess = true; // show green border if newPass == confirmPass and 7chars
              this.isConfirmPassSuccess = true;
            }
        } else {
          this.hasWarning = false;
          this.isNewPassSuccess = false;
          this.isConfirmPassSuccess = false;
          this.isSecurityMet = false;
          this.securityMessage = this.localizationResources.ErrorCode_SecurityRequirementsNotFulfilled;
        }
    } else {
      this.isDisabledBtn = true;
      this.hasWarning = false; // hide warning msg when fields are empty
      this.isSecurityMet = true;
      this.isNewPassSuccess = false; // remove green border
      this.isConfirmPassSuccess = false; // remove green border
    }
  }

  ClickSave() {
    this.IsBusy = true;
    this.ChangePassword();
  }

  ClickGoBack() {
    window.history.back();
  }

  Refresh() {}

  public RefreshTranslations() {
    this.securityMessage = this.localizationResources.ErrorCode_SecurityRequirementsNotFulfilled;
  }

  public RefreshPageTitle() {
      this.pageTitle = this.localizationResources.Label_ChangePassword;
  }

}
