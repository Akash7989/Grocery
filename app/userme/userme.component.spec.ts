import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermeComponent } from './userme.component';

describe('UsermeComponent', () => {
  let component: UsermeComponent;
  let fixture: ComponentFixture<UsermeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
