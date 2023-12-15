import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  constructor() {}

  private listInformation = [
    {
      label: 'age',
      value: '32',
    },
    {
      label: 'name',
      value: 'Neider Urbano',
    },
    {
      label: 'career',
      value: 'System Engineer and Full Stack Dev',
    },
  ];

  get information() {
    return this.listInformation;
  }
}
