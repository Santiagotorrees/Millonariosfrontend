import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Idolos } from './idolos';

describe('Idolos', () => {
  let component: Idolos;
  let fixture: ComponentFixture<Idolos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Idolos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Idolos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
