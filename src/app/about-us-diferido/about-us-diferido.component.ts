import { Component } from '@angular/core';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-about-us-diferido',
  templateUrl: './about-us-diferido.component.html',
  styleUrls: ['./about-us-diferido.component.css'],
})
export class AboutUsDiferidoComponent {
  visible: boolean = true;
  imgUserPhoto =
    'https://avatars.githubusercontent.com/u/80359162?s=400&u=6c6750cdcd678d6d8eae27c35d06ead0c3972a66&v=4';

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
