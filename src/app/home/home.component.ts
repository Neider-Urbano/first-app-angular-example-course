import { Component } from '@angular/core';
import { InformationService } from '../services/information.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public priceExpect: number = 4000000;

  constructor(
    private clipboard: Clipboard,
    private informationService: InformationService
  ) {}

  get information(): string | undefined {
    const career = this.informationService.information.find(
      (information) => information.label == 'career'
    );

    return career?.value;
  }

  copyEmail(): void {
    this.clipboard.copy('jjuly8julianur@gmail.com');
    alert('¡Copied Email!');
  }
}
