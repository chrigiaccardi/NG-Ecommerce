import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRecensioni } from './vista-recensioni';

describe('VistaRecensioni', () => {
  let component: VistaRecensioni;
  let fixture: ComponentFixture<VistaRecensioni>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaRecensioni],
    }).compileComponents();

    fixture = TestBed.createComponent(VistaRecensioni);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
