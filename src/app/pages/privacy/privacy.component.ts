import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  private language : string;
  constructor( private languageService: LanguageService) {}
  ngOnInit() {
    this.languageService.register( this );
    this.language = this.languageService.getCurrentLanguage();
  }
  onCurrentLanguageChanged(lang: string): void {
    this.language = this.languageService.getCurrentLanguage();
  }

}
