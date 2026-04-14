import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpedizione } from './form-spedizione';

describe('FormSpedizione', () => {
  let component: FormSpedizione;
  let fixture: ComponentFixture<FormSpedizione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSpedizione],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSpedizione);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
