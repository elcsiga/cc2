import { Component, OnInit } from '@angular/core';
import { pictures } from '../../static-data/pictures';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  pictures = pictures;
  constructor() { }

  ngOnInit() {
  }

}
