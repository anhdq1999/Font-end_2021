import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GocNhinThangComponent } from './goc-nhin-thang.component';

describe('GocNhinThangComponent', () => {
  let component: GocNhinThangComponent;
  let fixture: ComponentFixture<GocNhinThangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GocNhinThangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GocNhinThangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
