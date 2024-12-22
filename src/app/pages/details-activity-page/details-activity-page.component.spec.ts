import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsActivityPageComponent } from './details-activity-page.component';

describe('DetailsActivityPageComponent', () => {
  let component: DetailsActivityPageComponent;
  let fixture: ComponentFixture<DetailsActivityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsActivityPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
