import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StelleRecensioni } from './stelle-recensioni';

describe('StelleRecensioni', () => {
  let component: StelleRecensioni;
  let fixture: ComponentFixture<StelleRecensioni>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StelleRecensioni],
    }).compileComponents();

    fixture = TestBed.createComponent(StelleRecensioni);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
