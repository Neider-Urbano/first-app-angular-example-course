import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChildren('asSvg') svgRef!: QueryList<ElementRef>;

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
