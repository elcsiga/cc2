import { Component, OnInit } from '@angular/core';
import { pictures } from '../../static-data/pictures';


@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  pictures = pictures;
  constructor() { }

  ngOnInit() {
  }

}
