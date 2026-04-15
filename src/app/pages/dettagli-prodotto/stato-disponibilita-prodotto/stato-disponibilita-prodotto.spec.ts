import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatoDisponibilitaProdotto } from './stato-disponibilita-prodotto';

describe('StatoDisponibilitaProdotto', () => {
  let component: StatoDisponibilitaProdotto;
  let fixture: ComponentFixture<StatoDisponibilitaProdotto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatoDisponibilitaProdotto],
    }).compileComponents();

    fixture = TestBed.createComponent(StatoDisponibilitaProdotto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
