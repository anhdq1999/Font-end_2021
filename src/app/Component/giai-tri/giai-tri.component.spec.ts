import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaiTriComponent } from './giai-tri.component';

describe('GiaiTriComponent', () => {
  let component: GiaiTriComponent;
  let fixture: ComponentFixture<GiaiTriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaiTriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaiTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
