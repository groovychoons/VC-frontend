import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrgComponent } from './card-org.component';

describe('CardOrgComponent', () => {
  let component: CardOrgComponent;
  let fixture: ComponentFixture<CardOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
