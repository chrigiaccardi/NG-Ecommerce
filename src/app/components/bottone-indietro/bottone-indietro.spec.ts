import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottoneIndietro } from './bottone-indietro';

describe('BottoneIndietro', () => {
  let component: BottoneIndietro;
  let fixture: ComponentFixture<BottoneIndietro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottoneIndietro],
    }).compileComponents();

    fixture = TestBed.createComponent(BottoneIndietro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
