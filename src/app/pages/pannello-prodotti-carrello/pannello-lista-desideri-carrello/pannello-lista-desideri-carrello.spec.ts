import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannelloListaDesideriCarrello } from './pannello-lista-desideri-carrello';

describe('PannelloListaDesideriCarrello', () => {
  let component: PannelloListaDesideriCarrello;
  let fixture: ComponentFixture<PannelloListaDesideriCarrello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PannelloListaDesideriCarrello],
    }).compileComponents();

    fixture = TestBed.createComponent(PannelloListaDesideriCarrello);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
