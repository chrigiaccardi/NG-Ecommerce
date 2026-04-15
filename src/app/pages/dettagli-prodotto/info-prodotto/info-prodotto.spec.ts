import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProdotto } from './info-prodotto';

describe('InfoProdotto', () => {
  let component: InfoProdotto;
  let fixture: ComponentFixture<InfoProdotto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProdotto],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoProdotto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
