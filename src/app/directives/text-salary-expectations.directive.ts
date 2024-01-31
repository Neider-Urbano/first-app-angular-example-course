import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appTextSalaryExpectations]',
})
export class TextSalaryExpectationsDirective implements AfterViewInit {
  @Input() value: string = '';

  constructor(private elRef: ElementRef, private renderer2: Renderer2) {}
  ngAfterViewInit(): void {
    const element = this.elRef.nativeElement;
    const textElement = element.innerText;
    const valueText = this.getText(textElement);
    this.renderer2.setProperty(element, 'innerHTML', valueText);
  }

  getText(phrase: string): string {
    return phrase + ' ' + this.value;
  }
}
