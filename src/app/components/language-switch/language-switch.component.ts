import {Component, Input, OnInit} from '@angular/core';
import {LanguageService, Translateable} from '../../services/language.service';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss']
})
export class LanguageSwitchComponent implements OnInit, Translateable {
  isCurrentLanguage = false;

  @Input()
  code: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.register( this );
    this.init();
  }
  onCurrentLanguageChanged(lang: string): void {
    this.init();
  }

  setCurrentLanguage() {
    this.languageService.setCurrentLanguage( this.code );
  }

  private init() {
    this.isCurrentLanguage = this.languageService.getCurrentLanguage() === this.code;
  }





}
