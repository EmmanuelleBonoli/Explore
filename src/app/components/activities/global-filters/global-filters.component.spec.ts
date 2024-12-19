import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GlobalFiltersComponent} from './global-filters.component';

describe('GlobalFilterComponent', () => {
  let component: GlobalFiltersComponent;
  let fixture: ComponentFixture<GlobalFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalFiltersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GlobalFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
