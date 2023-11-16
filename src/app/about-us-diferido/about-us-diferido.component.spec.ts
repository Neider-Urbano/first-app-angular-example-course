import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDiferidoComponent } from './about-us-diferido.component';

describe('AboutUsDiferidoComponent', () => {
  let component: AboutUsDiferidoComponent;
  let fixture: ComponentFixture<AboutUsDiferidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsDiferidoComponent]
    });
    fixture = TestBed.createComponent(AboutUsDiferidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
