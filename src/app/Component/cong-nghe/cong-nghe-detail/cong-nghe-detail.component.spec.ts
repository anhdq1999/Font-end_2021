import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNgheDetailComponent } from './cong-nghe-detail.component';

describe('CongNgheDetailComponent', () => {
  let component: CongNgheDetailComponent;
  let fixture: ComponentFixture<CongNgheDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongNgheDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNgheDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
