import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuanVnComponent } from './tuan-vn.component';

describe('TuanVnComponent', () => {
  let component: TuanVnComponent;
  let fixture: ComponentFixture<TuanVnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuanVnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuanVnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
