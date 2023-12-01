import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appResaltarPares]',
})
export class ResaltarParesDirective {
  @Input() value = 0;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    const number = this.getNumber(this.value);
    if (number % 2 === 0) {
      this.elRef.nativeElement.style.color = 'red';
    } else {
      this.elRef.nativeElement.style.color = 'green';
    }
  }

  getNumber(character: number): number {
    return character;
  }
}
