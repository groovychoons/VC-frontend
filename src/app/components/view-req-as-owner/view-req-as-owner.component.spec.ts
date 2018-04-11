import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReqAsOwnerComponent } from './view-req-as-owner.component';

describe('ViewReqAsOwnerComponent', () => {
  let component: ViewReqAsOwnerComponent;
  let fixture: ComponentFixture<ViewReqAsOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReqAsOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReqAsOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
