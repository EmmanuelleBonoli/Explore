import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeComponent } from './activity-type.component';

describe('ActivityTypeComponent', () => {
  let component: ActivityTypeComponent;
  let fixture: ComponentFixture<ActivityTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
