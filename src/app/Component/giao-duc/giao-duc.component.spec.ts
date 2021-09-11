import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaoDucComponent } from './giao-duc.component';

describe('GiaoDucComponent', () => {
  let component: GiaoDucComponent;
  let fixture: ComponentFixture<GiaoDucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaoDucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaoDucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
