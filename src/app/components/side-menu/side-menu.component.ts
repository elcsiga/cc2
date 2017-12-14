import {Component, OnInit, Renderer2} from '@angular/core';
import {Menu, SideMenuService} from '../../services/side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, Menu{
  private visible = false;
  private eventListener = null;

  constructor(
    private sideMenuService: SideMenuService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.sideMenuService.register(this);
  }

  show(): void {
    this.visible = true;
    setTimeout( () => {
      if (this.eventListener === null) {
        this.eventListener = this.renderer.listen('document', 'click', (evt) => {
          this.hide();
        });
      }
    },0);
  }

  hide(): void {
    if (this.eventListener) {
      this.eventListener(); // removes the listener
      this.eventListener = null;
    }
    this.visible = false;
  }

  onBodyClicked() {
    this.hide();
  }

  isVisible(): boolean {
    return this.visible;
  }

}
