import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barras } from './barras';

describe('Barras', () => {
  let component: Barras;
  let fixture: ComponentFixture<Barras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
