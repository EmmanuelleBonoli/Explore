import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCommentsComponent } from './activity-comments.component';

describe('ActivityCommentsComponent', () => {
  let component: ActivityCommentsComponent;
  let fixture: ComponentFixture<ActivityCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
