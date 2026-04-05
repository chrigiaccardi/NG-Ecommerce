import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdotto } from './card-prodotto';

describe('CardProdotto', () => {
  let component: CardProdotto;
  let fixture: ComponentFixture<CardProdotto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProdotto],
    }).compileComponents();

    fixture = TestBed.createComponent(CardProdotto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
