import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhapLuatDetailComponent } from './phap-luat-detail.component';

describe('PhapLuatDetailComponent', () => {
  let component: PhapLuatDetailComponent;
  let fixture: ComponentFixture<PhapLuatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhapLuatDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhapLuatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
