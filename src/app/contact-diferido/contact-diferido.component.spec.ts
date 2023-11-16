import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDiferidoComponent } from './contact-diferido.component';

describe('ContactDiferidoComponent', () => {
  let component: ContactDiferidoComponent;
  let fixture: ComponentFixture<ContactDiferidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDiferidoComponent]
    });
    fixture = TestBed.createComponent(ContactDiferidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
