import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGotListComponent } from './admin-got-list.component';

describe('AdminGotListComponent', () => {
  let component: AdminGotListComponent;
  let fixture: ComponentFixture<AdminGotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGotListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
