import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuanVnDetailComponent } from './tuan-vn-detail.component';

describe('TuanVnDetailComponent', () => {
  let component: TuanVnDetailComponent;
  let fixture: ComponentFixture<TuanVnDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuanVnDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuanVnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
