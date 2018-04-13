
import { GlobalService } from './../../shared/service/global.service';
import { ConstantService } from './../../shared/enum/egov-constant.enum';
import { UserDto } from './../../shared/dto/user-dto';
import { UserService } from './../../shared/service/user.service';
import { UserRole } from './../../shared/enum/user-role.enum';
import { ErrorHandlerService } from './../../shared/service/error-handler.service';
import { LabelEnum } from './../../shared/enum/label.enum';
import { ILanguage } from './../../shared/interface/ilanguage';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  localizationResources: ILanguage;
  isConfigurationIconShown = false;
  isManageIconShown = false;
  isMenuDisabled = true;
  isChangePassMenuShown = false;
  isManageCompanyShown = false;
  isIconHidden = true;
  selectedPage = ''; // $state.current.name;
  selectedLanguage: string;
  selectedLanguageName: string;
  userName: string;
  currentUser: UserDto;
  userRoles: string;
  selectedCaseId: string;
  pageTitle = '';

  constructor(private translate: TranslateService,
              private _route: ActivatedRoute,
              private _errorService: ErrorHandlerService,
              private _userService: UserService,
              private _router: Router,
              private _egovService: GlobalService) {
    console.log('get default lang', _egovService.getDefaultLanguage());
    translate.setDefaultLang(_egovService.getDefaultLanguage());
  }

  switchLanguage(language: string) {
    console.log('Switching language to', language);
    this.translate.use(language);
    this.selectedLanguage = language;
    if (sessionStorage) {
      sessionStorage.setItem('selectedLanguage', language);
    }
    this.selectedLanguageName = this.localizationResources.languageName;

    // $rootScope.$broadcast($rootScope.switchLanguageEvent, language);
    this._egovService.languageSwitched.next(language);
  }

  ngOnInit() {
    this.localizationResources = LabelEnum;

    this._router.events.filter(event => event instanceof NavigationEnd).subscribe(nav => {
        console.log('nav', nav['url']);
        this.selectedPage = nav['url'];
    });

    this._egovService.titleDefined.subscribe(
        (pageTitle: string) => {
            this.pageTitle = pageTitle;
        }
    );

    const userRole = UserRole;

    this.selectedLanguage = this.localizationResources.languageCode;
    if (sessionStorage) {
      if (sessionStorage.getItem('selectedLanguage')) {
          this.selectedLanguage = sessionStorage.getItem('selectedLanguage');
          this.selectedLanguageName = this.localizationResources.languageName;
          // $rootScope.$broadcast($rootScope.switchLanguageEvent, $scope.selectedLanguage);
          this._egovService.languageSwitched.next(this.selectedLanguage);
      }
      sessionStorage.setItem('selectedLanguage', this.selectedLanguage);
    }

    $('.navsidemenu').on('click', () => {
      $('.navbar-nav').toggleClass('slide-in');
      $('.side-body').toggleClass('body-slide-in');
      $('#search').removeClass('in');
      $('#search').addClass('collapse');
      $('#search').slideUp(200);
    });

    this.GetUser();
  }

  logout() {
    const logout = confirm(this.localizationResources.Message_Logout);
    if (logout) {
        sessionStorage.clear();
        setTimeout(function() {
            location.href = '/login/sls/auth?cmd=logout';
        }, 800);
        console.log(location.protocol + location.host + '/login/sls/auth?cmd=logout');
    }
  }

  GetUser() {
      console.log('get user called');
    if (sessionStorage) {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('username').length > 0) {
            this.userName = sessionStorage.getItem('username');
        } else {
            this.GetUserFromDB();
        }

        if (sessionStorage.getItem('userRoles')) {
            this.userRoles = sessionStorage.getItem('userRoles');
            if (this.userRoles !== undefined && this.userRoles !== null) {
                if (this.userRoles.indexOf(UserRole.Dealers) > 0) {
                    this.isMenuDisabled = false;
                    this.isIconHidden = true;
                    this.isChangePassMenuShown = true;
                }
                if (this.userRoles.indexOf(UserRole.Clerks) > 0) {
                    this.isConfigurationIconShown = true;
                    this.isMenuDisabled = true;
                }
                if (this.userRoles.indexOf(UserRole.DealerAdmins) > 0) {
                    this.isManageIconShown = true;
                    this.isIconHidden = false;
                    this.isMenuDisabled = false;
                    this.isChangePassMenuShown = true;
                }
                if (this.userRoles.indexOf(UserRole.ClerkAdmins) > 0) {
                    this.isConfigurationIconShown = true;
                    this.isMenuDisabled = true;
                    this.isManageIconShown = true;
                    this.isIconHidden = false;
                    this.isManageCompanyShown = true;
                }
            }
        }
    } else {
        this.GetUserFromDB();
    }
  }

  GetUserFromDB() {
    this._userService.getUser().subscribe((result: UserDto) => {
        sessionStorage.setItem('username', result.name);
        this.currentUser = result;
        if (result.name !== undefined && result.name.length > 0) {
            this.userName = result.name;
        }
        this.userRoles = JSON.stringify(result.roles);
        sessionStorage.setItem('userRoles', JSON.stringify(result.roles));
        // $rootScope.$broadcast($rootScope.userFromDBEvent, $scope.userRoles);
        if (this.userRoles !== undefined && this.userRoles !== null) {
            if (this.userRoles.indexOf(UserRole.Dealers) > 0) {
                this.isMenuDisabled = false;
                this.isIconHidden = true;
                this.isChangePassMenuShown = true;
            }
            if (this.userRoles.indexOf(UserRole.Clerks) > 0) {
                this.isConfigurationIconShown = true;
                this.isMenuDisabled = true;
            }
            if (this.userRoles.indexOf(UserRole.DealerAdmins) > 0) {
                this.isManageIconShown = true;
                this.isIconHidden = false;
                this.isMenuDisabled = false;
                this.isChangePassMenuShown = true;
            }
            if (this.userRoles.indexOf(UserRole.ClerkAdmins) > 0) {
                this.isConfigurationIconShown = true;
                this.isMenuDisabled = true;
                this.isManageIconShown = true;
                this.isIconHidden = false;
                this.isManageCompanyShown = true;
            }
        }

        this._egovService.userDBLoaded.next();
    });
  }

  goToVehicleChangeCase() {
    if (this.isMenuDisabled) {
        return;
    }

    if (this.selectedPage === ConstantService.newVehicleChangeCase ||
        this.selectedPage === ConstantService.businessRules ||
        this.selectedPage === ConstantService.configurationSummary) {
        this.confirmNavigateAwayNewCase();
    } else {
        this.redirectToNewCase();
    }
  }

  confirmNavigateAwayNewCase() {
    const answer = confirm(this.localizationResources.Message_NavigateAway);
    if (answer) {
        this.redirectToNewCase();
    }
  }

  redirectToNewCase() {
    let jsonOfSelectedCase = '';
    if (this.selectedCaseId)  {
        jsonOfSelectedCase = this.selectedCaseId;
    }
    // $state.go('newVehicleChangeCase', { selectedCase: jsonOfSelectedCase });
    this._router.navigate(['newVehicleChangeCase', jsonOfSelectedCase]);
  }

  goToVehicleOverview() {
    if (this.selectedPage === ConstantService.newVehicleChangeCase ||
        this.selectedPage === ConstantService.businessRules ||
        this.selectedPage === ConstantService.configurationSummary) {
        const answer = confirm(this.localizationResources.Message_NavigateAway);
        if (answer) {
            this.selectedCaseId = '';
            // $state.go('vehicleChangeCaseOverview');
            this._router.navigate(['vehicleChangeCaseOverview']);
        }
    } else {
        this.selectedCaseId = '';
        // $state.go('vehicleChangeCaseOverview');
        this._router.navigate(['vehicleChangeCaseOverview']);
    }
  }

  goToConfigurationSummary() {
    if (this.selectedPage === ConstantService.newVehicleChangeCase ||
        this.selectedPage === ConstantService.businessRules ||
        this.selectedPage === ConstantService.configurationSummary) {
        const answer = confirm(this.localizationResources.Message_NavigateAway);
        if (answer) {
            // $scope.redirectTo('configurationSummary');
            this._router.navigate(['configurationSummary']);
        }
    } else {
        // $scope.redirectTo('configurationSummary');
        this._router.navigate(['configurationSummary']);
    }
  }

  goToBusinessRule() {
    if (this.selectedPage === ConstantService.newVehicleChangeCase ||
        this.selectedPage === ConstantService.businessRules ||
        this.selectedPage === ConstantService.configurationSummary) {
        const answer = confirm(this.localizationResources.Message_NavigateAway);
        if (answer) {
            // $scope.redirectTo('businessRules');
            this._router.navigate(['businessRules']);
        }
    } else {
        // $scope.redirectTo('businessRules');
        this._router.navigate(['businessRules']);
    }
  }

  goToChangePassword() {
    if (this.selectedPage === ConstantService.newVehicleChangeCase ||
        this.selectedPage === ConstantService.businessRules ||
        this.selectedPage === ConstantService.configurationSummary) {
        const answer = confirm(this.localizationResources.Message_NavigateAway);
        if (answer) {
            // $scope.redirectTo('changePassword');
            this._router.navigate(['changePassword']);
        }
    } else {
        // $scope.redirectTo('changePassword');
        this._router.navigate(['changePassword']);
    }
  }

  goToManageUsers = () => {
    if (this.selectedPage === ConstantService.newVehicleChangeCase ||
        this.selectedPage === ConstantService.businessRules ||
        this.selectedPage === ConstantService.configurationSummary) {
        const answer = confirm(this.localizationResources.Message_NavigateAway);
        if (answer) {
            // $state.go('users');
            this._router.navigate(['users']);
        }
    } else {
        // $state.go('users');
        this._router.navigate(['users']);
    }
  }

  goToManageCompanies = () => {
    $('#usermanagement')['collapse']('hide');
    if (this.selectedPage === ConstantService.newVehicleChangeCase ||
        this.selectedPage === ConstantService.businessRules ||
        this.selectedPage === ConstantService.configurationSummary) {
        const answer = confirm(this.localizationResources.Message_NavigateAway);
        if (answer) {
            // $scope.redirectTo('companyOverview');
            this._router.navigate(['companyOverview']);
        }
    } else {
        // $scope.redirectTo('companyOverview');
        this._router.navigate(['companyOverview']);
    }
  }

  // $scope.$on('$viewContentLoaded', () => {
  //   $scope.GetUser();
  // });

}
