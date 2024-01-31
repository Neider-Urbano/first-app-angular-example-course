import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from '../services/information.service';
import { imgsData } from '../services/dataImgs';
import { SocialNetworks } from '../models/socialNetworks.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public priceExpect: number = 4000000;

  socialNetworks: SocialNetworks = [
    {
      id: 1,
      ariaLabel: 'GitHub-Neider',
      title: 'GitHub',
      href: 'https://github.com/Neider-Urbano',
    },
    {
      id: 2,
      ariaLabel: 'LinkedIn-Neider',
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/neiderurbano08/',
    },
  ];

  constructor(
    private router: Router,
    private informationService: InformationService
  ) {}

  imgs = imgsData;

  goToImg(id: number): void {
    this.router.navigate(['/img', id]);
  }

  get information(): string | undefined {
    const career = this.informationService.information.find(
      (information) => information.label == 'career'
    );

    return career?.value;
  }
}
