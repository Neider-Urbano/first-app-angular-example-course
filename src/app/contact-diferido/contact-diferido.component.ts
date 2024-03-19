import { Component } from '@angular/core';
import {
  ELEMENT_DATA,
  PeriodicElement,
} from '../models/contactInformation.model';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact-diferido',
  templateUrl: './contact-diferido.component.html',
  styleUrls: ['./contact-diferido.component.css'],
})
export class ContactDiferidoComponent {
  displayedColumns: string[] = ['position', 'key', 'value'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  constructor(private clipboard: Clipboard) {}

  copyEmail(): void {
    this.clipboard.copy('jjuly8julianur@gmail.com');
    alert('¡Copied Email!');
  }
}
