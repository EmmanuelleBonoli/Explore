import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesScrollerComponent } from './activities-scroller.component';

describe('ActivitiesScrollerComponent', () => {
  let component: ActivitiesScrollerComponent;
  let fixture: ComponentFixture<ActivitiesScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesScrollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
