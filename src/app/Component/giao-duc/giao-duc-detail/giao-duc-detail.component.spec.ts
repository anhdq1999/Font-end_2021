import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaoDucDetailComponent } from './giao-duc-detail.component';

describe('GiaoDucDetailComponent', () => {
  let component: GiaoDucDetailComponent;
  let fixture: ComponentFixture<GiaoDucDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaoDucDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaoDucDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
