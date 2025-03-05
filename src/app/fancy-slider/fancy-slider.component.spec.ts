import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancySliderComponent } from './fancy-slider.component';

describe('FancySliderComponent', () => {
  let component: FancySliderComponent;
  let fixture: ComponentFixture<FancySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancySliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
