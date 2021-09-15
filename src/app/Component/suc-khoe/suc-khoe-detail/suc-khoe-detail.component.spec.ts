import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucKhoeDetailComponent } from './suc-khoe-detail.component';

describe('SucKhoeDetailComponent', () => {
  let component: SucKhoeDetailComponent;
  let fixture: ComponentFixture<SucKhoeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucKhoeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucKhoeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
