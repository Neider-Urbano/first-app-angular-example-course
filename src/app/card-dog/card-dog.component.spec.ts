import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDogComponent } from './card-dog.component';

describe('CardDogComponent', () => {
  let component: CardDogComponent;
  let fixture: ComponentFixture<CardDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDogComponent]
    });
    fixture = TestBed.createComponent(CardDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
