import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhapLuatComponent } from './phap-luat.component';

describe('PhapLuatComponent', () => {
  let component: PhapLuatComponent;
  let fixture: ComponentFixture<PhapLuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhapLuatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhapLuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
