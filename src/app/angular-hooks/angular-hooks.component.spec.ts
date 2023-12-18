import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHooksComponent } from './angular-hooks.component';

describe('AngularHooksComponent', () => {
  let component: AngularHooksComponent;
  let fixture: ComponentFixture<AngularHooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularHooksComponent]
    });
    fixture = TestBed.createComponent(AngularHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
