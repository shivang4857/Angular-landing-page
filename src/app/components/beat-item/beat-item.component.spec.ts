import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatItemComponent } from './beat-item.component';

describe('BeatItemComponent', () => {
  let component: BeatItemComponent;
  let fixture: ComponentFixture<BeatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
