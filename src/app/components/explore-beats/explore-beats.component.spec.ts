import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreBeatsComponent } from './explore-beats.component';

describe('ExploreBeatsComponent', () => {
  let component: ExploreBeatsComponent;
  let fixture: ComponentFixture<ExploreBeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreBeatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreBeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
