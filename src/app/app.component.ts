import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'name_en';
  constructor(private _translate: TranslateService) {

  }

  ngOnInit() {

    if (sessionStorage && sessionStorage.getItem('selectedLanguage')) { // persist language on browsers
      this._translate.use(sessionStorage.getItem('selectedLanguage'));
    } else {
      this._translate.setDefaultLang('en');
    }
  }

  switchLanguage(language: string) {
    console.log('switching language', language);
    this._translate.use(language);
    sessionStorage.setItem('selectedLanguage', language);
    console.log('language now', sessionStorage.getItem('selectedLanguage'));
  }

  bodyClicked(e) {
    $('#languagedropdown')['collapse']('hide');
    $('#usernamedropdown')['collapse']('hide');
    $('#settingsdropdown')['collapse']('hide');
    $('#usermanagement')['collapse']('hide');
    $('.dropdown-auto')['collapse']('hide');
    $('#usermanagement')['collapse']('hide');
  }
}
