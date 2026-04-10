import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommarioOrdine } from './sommario-ordine';

describe('SommarioOrdine', () => {
  let component: SommarioOrdine;
  let fixture: ComponentFixture<SommarioOrdine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SommarioOrdine],
    }).compileComponents();

    fixture = TestBed.createComponent(SommarioOrdine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
