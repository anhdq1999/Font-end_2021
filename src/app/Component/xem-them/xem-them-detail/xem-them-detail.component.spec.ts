import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemThemDetailComponent } from './xem-them-detail.component';

describe('XemThemDetailComponent', () => {
  let component: XemThemDetailComponent;
  let fixture: ComponentFixture<XemThemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemThemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemThemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
