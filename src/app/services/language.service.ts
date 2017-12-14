import { Injectable } from '@angular/core';
import { texts } from '../static-data/texts';

function deepFind( obj, path: string[]) {
  let item = obj;
  path.forEach( pathKey => {
    const nextItem = item[pathKey];
    if (nextItem === undefined) {
      return undefined;
    }
    item = nextItem;
  });
  return item;
}

export interface Translateable {
  onCurrentLanguageChanged( lang: string): void;
}

@Injectable()
export class LanguageService {
  currentLanguage = 'hu';
  translateables: Translateable[] = [];

  constructor() { }

  setCurrentLanguage( lang: string) {
    this.currentLanguage = lang;
    this.translateables.forEach( t => t.onCurrentLanguageChanged( lang ) );
  }

  register( translateable: Translateable ) {
    this.translateables.push( translateable );
  }

  translate( key: string ): string {
    const text = deepFind( texts, key.split('.'));
    if (text && text[this.currentLanguage]) {
      return text[this.currentLanguage] as string;
    } else {
      console.error(' Missing translation: ', key);
      return '<' + key + '>';
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}
