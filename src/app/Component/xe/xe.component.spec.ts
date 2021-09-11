import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XeComponent } from './xe.component';

describe('XeComponent', () => {
  let component: XeComponent;
  let fixture: ComponentFixture<XeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
