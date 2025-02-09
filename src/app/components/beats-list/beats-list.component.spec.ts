import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatListComponent } from './beats-list.component';

describe('BeatsListComponent', () => {
  let component: BeatListComponent;
  let fixture: ComponentFixture<BeatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
