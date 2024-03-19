import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { SocialNetworks } from '../models/socialNetworks.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChildren('asSvg') svgRef!: QueryList<ElementRef>;
  imgUserPhoto =
    'https://avatars.githubusercontent.com/u/80359162?s=400&u=6c6750cdcd678d6d8eae27c35d06ead0c3972a66&v=4';
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
    {
      id: 3,
      ariaLabel: 'Facebook-Neider',
      title: 'Facebook',
      href: 'https://www.facebook.com/neider.urbano.35',
    },
  ];

  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.svgRef?.forEach((element) => {
      const asSvg = element.nativeElement;
      this.renderer2.setAttribute(asSvg, 'height', '24');
      this.renderer2.setAttribute(asSvg, 'width', '24');
      this.renderer2.setAttribute(asSvg, 'data-name', 'Logo');
      this.renderer2.setAttribute(asSvg, 'xmlns', 'http://www.w3.org/2000/svg');
    });
  }
}
