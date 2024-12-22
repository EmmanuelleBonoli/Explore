import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesCarouselComponent } from './activities-carousel.component';

describe('ActivitiesCarouselComponent', () => {
  let component: ActivitiesCarouselComponent;
  let fixture: ComponentFixture<ActivitiesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
