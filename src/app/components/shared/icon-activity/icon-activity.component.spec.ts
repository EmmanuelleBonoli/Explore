import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconActivityComponent } from './icon-activity.component';

describe('IconActivityComponent', () => {
  let component: IconActivityComponent;
  let fixture: ComponentFixture<IconActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
