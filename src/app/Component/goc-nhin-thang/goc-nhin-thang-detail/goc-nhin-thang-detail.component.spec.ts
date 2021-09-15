import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GocNhinThangDetailComponent } from './goc-nhin-thang-detail.component';

describe('GocNhinThangDetailComponent', () => {
  let component: GocNhinThangDetailComponent;
  let fixture: ComponentFixture<GocNhinThangDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GocNhinThangDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GocNhinThangDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
