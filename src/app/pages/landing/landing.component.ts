import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
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
