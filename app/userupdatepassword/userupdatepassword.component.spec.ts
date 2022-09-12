import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserupdatepasswordComponent } from './userupdatepassword.component';

describe('UserupdatepasswordComponent', () => {
  let component: UserupdatepasswordComponent;
  let fixture: ComponentFixture<UserupdatepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserupdatepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserupdatepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
