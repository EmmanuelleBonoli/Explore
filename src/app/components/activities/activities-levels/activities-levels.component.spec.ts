import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesLevelsComponent } from './activities-levels.component';

describe('ActivitiesLevelsComponent', () => {
  let component: ActivitiesLevelsComponent;
  let fixture: ComponentFixture<ActivitiesLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesLevelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
