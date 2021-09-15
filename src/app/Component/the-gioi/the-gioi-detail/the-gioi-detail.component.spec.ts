import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGioiDetailComponent } from './the-gioi-detail.component';

describe('TheGioiDetailComponent', () => {
  let component: TheGioiDetailComponent;
  let fixture: ComponentFixture<TheGioiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheGioiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheGioiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
