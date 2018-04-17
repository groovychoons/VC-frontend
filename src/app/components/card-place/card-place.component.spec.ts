import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlaceComponent } from './card-place.component';

describe('CardPlaceComponent', () => {
  let component: CardPlaceComponent;
  let fixture: ComponentFixture<CardPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
