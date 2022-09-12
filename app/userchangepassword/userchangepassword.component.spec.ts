import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchangepasswordComponent } from './userchangepassword.component';

describe('UserchangepasswordComponent', () => {
  let component: UserchangepasswordComponent;
  let fixture: ComponentFixture<UserchangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserchangepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
