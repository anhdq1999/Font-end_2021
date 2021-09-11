import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGioiComponent } from './the-gioi.component';

describe('TheGioiComponent', () => {
  let component: TheGioiComponent;
  let fixture: ComponentFixture<TheGioiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheGioiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheGioiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
