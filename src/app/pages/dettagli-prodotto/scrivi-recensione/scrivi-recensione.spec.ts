import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriviRecensione } from './scrivi-recensione';

describe('ScriviRecensione', () => {
  let component: ScriviRecensione;
  let fixture: ComponentFixture<ScriviRecensione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriviRecensione],
    }).compileComponents();

    fixture = TestBed.createComponent(ScriviRecensione);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
