import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzioniHeader } from './azioni-header';

describe('AzioniHeader', () => {
  let component: AzioniHeader;
  let fixture: ComponentFixture<AzioniHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzioniHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(AzioniHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
