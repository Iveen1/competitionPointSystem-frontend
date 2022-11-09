import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantPageComponent } from './participant-page.component';

describe('ParticipantPageComponent', () => {
  let component: ParticipantPageComponent;
  let fixture: ComponentFixture<ParticipantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
