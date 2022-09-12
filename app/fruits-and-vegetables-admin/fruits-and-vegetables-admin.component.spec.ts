import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsAndVegetablesAdminComponent } from './fruits-and-vegetables-admin.component';

describe('FruitsAndVegetablesAdminComponent', () => {
  let component: FruitsAndVegetablesAdminComponent;
  let fixture: ComponentFixture<FruitsAndVegetablesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsAndVegetablesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsAndVegetablesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
