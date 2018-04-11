import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'name_en';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    console.log('switching language', language);
    this.translate.use(language);
  }

  bodyClicked(e) {
    $('#languagedropdown')['collapse']('hide');
    $('#usernamedropdown')['collapse']('hide');
    $('#settingsdropdown')['collapse']('hide');
    $('#usermanagement')['collapse']('hide');
  }

}
