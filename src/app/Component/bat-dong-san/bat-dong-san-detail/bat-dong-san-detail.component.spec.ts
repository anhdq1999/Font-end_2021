import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatDongSanDetailComponent } from './bat-dong-san-detail.component';

describe('BatDongSanDetailComponent', () => {
  let component: BatDongSanDetailComponent;
  let fixture: ComponentFixture<BatDongSanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatDongSanDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatDongSanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
