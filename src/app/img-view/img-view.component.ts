import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { imgsData } from '../services/dataImgs';
import { ImgProfile } from '../models/imgsProfile.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-img-view',
  templateUrl: './img-view.component.html',
  styleUrls: ['./img-view.component.css'],
})
export class ImgViewComponent implements OnInit {
  imgSelect: undefined | ImgProfile = undefined;

  constructor(private _location: Location, private route: ActivatedRoute) {}

  imgs = imgsData;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.imgSelect = this.imgs.find((img) => img.id == parseInt(id));
    }
  }

  goToVolver(): void {
    this._location.back();
  }
}
