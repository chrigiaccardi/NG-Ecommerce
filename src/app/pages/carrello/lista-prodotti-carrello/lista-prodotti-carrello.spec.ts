import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdottiCarrello } from './lista-prodotti-carrello';

describe('ListaProdottiCarrello', () => {
  let component: ListaProdottiCarrello;
  let fixture: ComponentFixture<ListaProdottiCarrello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProdottiCarrello],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaProdottiCarrello);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
