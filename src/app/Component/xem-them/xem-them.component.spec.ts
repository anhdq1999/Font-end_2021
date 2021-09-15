import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemThemComponent } from './xem-them.component';

describe('XemThemComponent', () => {
  let component: XemThemComponent;
  let fixture: ComponentFixture<XemThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
