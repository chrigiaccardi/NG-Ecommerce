import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDesideri } from './lista-desideri';

describe('ListaDesideri', () => {
  let component: ListaDesideri;
  let fixture: ComponentFixture<ListaDesideri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDesideri],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDesideri);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
