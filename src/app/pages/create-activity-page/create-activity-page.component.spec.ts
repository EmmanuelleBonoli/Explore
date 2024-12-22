import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActivityPageComponent } from './create-activity-page.component';

describe('CreateActivityPageComponent', () => {
  let component: CreateActivityPageComponent;
  let fixture: ComponentFixture<CreateActivityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateActivityPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
