import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrgAsOwnerComponent } from './view-org-as-owner.component';

describe('ViewOrgAsOwnerComponent', () => {
  let component: ViewOrgAsOwnerComponent;
  let fixture: ComponentFixture<ViewOrgAsOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrgAsOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrgAsOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
