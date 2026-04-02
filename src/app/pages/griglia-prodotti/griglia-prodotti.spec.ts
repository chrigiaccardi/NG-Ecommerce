import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrigliaProdotti } from './griglia-prodotti';

describe('GrigliaProdotti', () => {
  let component: GrigliaProdotti;
  let fixture: ComponentFixture<GrigliaProdotti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrigliaProdotti],
    }).compileComponents();

    fixture = TestBed.createComponent(GrigliaProdotti);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
