import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayActivitiesPageComponent } from './display-activities-page.component';

describe('DisplayActivitiesPageComponent', () => {
  let component: DisplayActivitiesPageComponent;
  let fixture: ComponentFixture<DisplayActivitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayActivitiesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
