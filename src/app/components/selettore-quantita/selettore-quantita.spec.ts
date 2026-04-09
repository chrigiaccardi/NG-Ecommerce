import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelettoreQuantita } from './selettore-quantita';

describe('SelettoreQuantita', () => {
  let component: SelettoreQuantita;
  let fixture: ComponentFixture<SelettoreQuantita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelettoreQuantita],
    }).compileComponents();

    fixture = TestBed.createComponent(SelettoreQuantita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
