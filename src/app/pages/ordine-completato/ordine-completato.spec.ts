import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdineCompletato } from './ordine-completato';

describe('OrdineCompletato', () => {
  let component: OrdineCompletato;
  let fixture: ComponentFixture<OrdineCompletato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdineCompletato],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdineCompletato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
