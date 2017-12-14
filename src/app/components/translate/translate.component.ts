import {Component, Input, OnInit} from '@angular/core';
import {LanguageService, Translateable} from '../../services/language.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit, Translateable {
  text = '';

  @Input()
  key: string;

  setText() {
    this.text = this.languageService.translate( this.key );
  }

  constructor( private languageService: LanguageService ) {}

  ngOnInit() {
    this.languageService.register( this );
    this.setText();
  }
  onCurrentLanguageChanged(lang: string): void {
    this.setText();
  }

}
