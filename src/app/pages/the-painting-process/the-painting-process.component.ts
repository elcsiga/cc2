import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-the-painting-process',
  templateUrl: './the-painting-process.component.html',
  styleUrls: ['./the-painting-process.component.css']
})
export class ThePaintingProcessComponent implements OnInit {
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
