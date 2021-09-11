import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoiSuComponent } from './thoi-su.component';

describe('ThoiSuComponent', () => {
  let component: ThoiSuComponent;
  let fixture: ComponentFixture<ThoiSuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoiSuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoiSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
