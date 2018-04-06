import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardByTeamComponent } from './card-by-team.component';

describe('CardByTeamComponent', () => {
  let component: CardByTeamComponent;
  let fixture: ComponentFixture<CardByTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardByTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardByTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
