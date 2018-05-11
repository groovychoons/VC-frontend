import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLatestRequestsComponent } from './card-latest-requests.component';

describe('CardLatestRequestsComponent', () => {
  let component: CardLatestRequestsComponent;
  let fixture: ComponentFixture<CardLatestRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLatestRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLatestRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
