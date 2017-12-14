import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {
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
