import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReqByOrgComponent } from './card-req-by-org.component';

describe('CardReqByOrgComponent', () => {
  let component: CardReqByOrgComponent;
  let fixture: ComponentFixture<CardReqByOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReqByOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReqByOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
