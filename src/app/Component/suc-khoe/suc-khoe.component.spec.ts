import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucKhoeComponent } from './suc-khoe.component';

describe('SucKhoeComponent', () => {
  let component: SucKhoeComponent;
  let fixture: ComponentFixture<SucKhoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucKhoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucKhoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
