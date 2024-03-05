import { Component } from '@angular/core';
import {
  ELEMENT_DATA,
  PeriodicElement,
} from '../models/contactInformation.model';

@Component({
  selector: 'app-contact-diferido',
  templateUrl: './contact-diferido.component.html',
  styleUrls: ['./contact-diferido.component.css'],
})
export class ContactDiferidoComponent {
  displayedColumns: string[] = ['position', 'key', 'value'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
}
