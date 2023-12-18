import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-angular-hooks',
  templateUrl: './angular-hooks.component.html',
  styleUrls: ['./angular-hooks.component.css'],
})
export class AngularHooksComponent
  implements
    OnInit,
    OnDestroy,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  counter: number = 0;

  constructor() {
    console.log('constructor');
    this.counter = 1;
  }

  inc() {
    console.log('inc');
    this.counter += 1;
  }

  ngOnInit() {
    console.log('ng on init');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
}
