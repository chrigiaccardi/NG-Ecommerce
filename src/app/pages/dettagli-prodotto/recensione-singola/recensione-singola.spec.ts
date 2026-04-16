import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensioneSingola } from './recensione-singola';

describe('RecensioneSingola', () => {
  let component: RecensioneSingola;
  let fixture: ComponentFixture<RecensioneSingola>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecensioneSingola],
    }).compileComponents();

    fixture = TestBed.createComponent(RecensioneSingola);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
