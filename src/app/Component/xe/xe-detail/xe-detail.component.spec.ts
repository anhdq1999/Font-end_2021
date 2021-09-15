import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XeDetailComponent } from './xe-detail.component';

describe('XeDetailComponent', () => {
  let component: XeDetailComponent;
  let fixture: ComponentFixture<XeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
