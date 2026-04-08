import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDesideriVuota } from './lista-desideri-vuota';

describe('ListaDesideriVuota', () => {
  let component: ListaDesideriVuota;
  let fixture: ComponentFixture<ListaDesideriVuota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDesideriVuota],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDesideriVuota);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
