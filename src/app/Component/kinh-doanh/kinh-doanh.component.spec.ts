import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinhDoanhComponent } from './kinh-doanh.component';

describe('KinhDoanhComponent', () => {
  let component: KinhDoanhComponent;
  let fixture: ComponentFixture<KinhDoanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinhDoanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinhDoanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
