import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorekeeperComponent } from './storekeeper.component';

describe('StorekeeperComponent', () => {
  let component: StorekeeperComponent;
  let fixture: ComponentFixture<StorekeeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorekeeperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
