import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOrgComponent } from './explore-org.component';

describe('ExploreOrgComponent', () => {
  let component: ExploreOrgComponent;
  let fixture: ComponentFixture<ExploreOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
