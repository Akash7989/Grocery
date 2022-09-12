import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsAndVegetables2Component } from './fruits-and-vegetables2.component';

describe('FruitsAndVegetables2Component', () => {
  let component: FruitsAndVegetables2Component;
  let fixture: ComponentFixture<FruitsAndVegetables2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsAndVegetables2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsAndVegetables2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
