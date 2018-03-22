import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbyuserComponent } from './cardbyuser.component';

describe('CardbyuserComponent', () => {
  let component: CardbyuserComponent;
  let fixture: ComponentFixture<CardbyuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardbyuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
