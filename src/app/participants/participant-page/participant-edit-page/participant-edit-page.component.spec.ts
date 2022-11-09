import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantEditPageComponent } from './participant-edit-page.component';

describe('ParticipantEditPageComponent', () => {
  let component: ParticipantEditPageComponent;
  let fixture: ComponentFixture<ParticipantEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
