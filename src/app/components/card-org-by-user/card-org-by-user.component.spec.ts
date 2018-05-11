import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrgByUserComponent } from './card-org-by-user.component';

describe('CardOrgByUserComponent', () => {
  let component: CardOrgByUserComponent;
  let fixture: ComponentFixture<CardOrgByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOrgByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOrgByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
