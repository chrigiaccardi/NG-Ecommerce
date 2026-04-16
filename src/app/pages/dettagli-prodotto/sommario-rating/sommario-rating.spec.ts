import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommarioRating } from './sommario-rating';

describe('SommarioRating', () => {
  let component: SommarioRating;
  let fixture: ComponentFixture<SommarioRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SommarioRating],
    }).compileComponents();

    fixture = TestBed.createComponent(SommarioRating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
