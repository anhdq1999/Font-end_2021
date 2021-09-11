import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNgheComponent } from './cong-nghe.component';

describe('CongNgheComponent', () => {
  let component: CongNgheComponent;
  let fixture: ComponentFixture<CongNgheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongNgheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNgheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
