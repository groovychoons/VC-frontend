import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOrgComponent } from './map-org.component';

describe('MapOrgComponent', () => {
  let component: MapOrgComponent;
  let fixture: ComponentFixture<MapOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
