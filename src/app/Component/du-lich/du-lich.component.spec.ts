import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuLichComponent } from './du-lich.component';

describe('DuLichComponent', () => {
  let component: DuLichComponent;
  let fixture: ComponentFixture<DuLichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuLichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuLichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
