import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePlacesComponent } from './explore-places.component';

describe('ExplorePlacesComponent', () => {
  let component: ExplorePlacesComponent;
  let fixture: ComponentFixture<ExplorePlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorePlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
