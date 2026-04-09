import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannelloProdottiCarrello } from './pannello-prodotti-carrello';

describe('PannelloProdottiCarrello', () => {
  let component: PannelloProdottiCarrello;
  let fixture: ComponentFixture<PannelloProdottiCarrello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PannelloProdottiCarrello],
    }).compileComponents();

    fixture = TestBed.createComponent(PannelloProdottiCarrello);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
