import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsAndVegetables1Component } from './fruits-and-vegetables1.component';

describe('FruitsAndVegetables1Component', () => {
  let component: FruitsAndVegetables1Component;
  let fixture: ComponentFixture<FruitsAndVegetables1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsAndVegetables1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsAndVegetables1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
