import { Injectable } from '@angular/core';

export interface Menu {
  show(): void;
  hide(): void;
  isVisible(): boolean;
}

@Injectable()
export class SideMenuService {
  menuVisible = false;
  menu: Menu;

  constructor() { }

  register( menu: Menu) : void {
    this.menu = menu;
  }

  show() {
    if (this.menu) {
      this.menu.show();
    }
  }

  hide() {
    if (this.menu) {
      this.menu.hide();
    }
  }

  toggle() {
    if (this.menu) {
      this.menu.isVisible() ? this.menu.hide() : this.menu.show();
    }
  }
}
