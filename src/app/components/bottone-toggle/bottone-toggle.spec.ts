import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottoneToggle } from './bottone-toggle';

describe('BottoneToggle', () => {
  let component: BottoneToggle;
  let fixture: ComponentFixture<BottoneToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottoneToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(BottoneToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
