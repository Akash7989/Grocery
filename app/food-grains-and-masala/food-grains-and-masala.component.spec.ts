import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodGrainsAndMasalaComponent } from './food-grains-and-masala.component';

describe('FoodGrainsAndMasalaComponent', () => {
  let component: FoodGrainsAndMasalaComponent;
  let fixture: ComponentFixture<FoodGrainsAndMasalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodGrainsAndMasalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodGrainsAndMasalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
