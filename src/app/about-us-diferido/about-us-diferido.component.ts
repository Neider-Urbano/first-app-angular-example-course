import { Component } from '@angular/core';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-about-us-diferido',
  templateUrl: './about-us-diferido.component.html',
  styleUrls: ['./about-us-diferido.component.css'],
})
export class AboutUsDiferidoComponent {
  visible: boolean = true;

  constructor(private informationService: InformationService) {}

  get information(): string | undefined {
    const career = this.informationService.information.find(
      (information) => information.label == 'career'
    );

    return career?.value;
  }

  mostrar(value: boolean): void {
    this.visible = value;
  }
}
