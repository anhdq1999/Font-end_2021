import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatDongSanComponent } from './bat-dong-san.component';

describe('BatDongSanComponent', () => {
  let component: BatDongSanComponent;
  let fixture: ComponentFixture<BatDongSanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatDongSanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatDongSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
