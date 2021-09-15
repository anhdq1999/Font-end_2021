import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaiTriDetailComponent } from './giai-tri-detail.component';

describe('GiaiTriDetailComponent', () => {
  let component: GiaiTriDetailComponent;
  let fixture: ComponentFixture<GiaiTriDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaiTriDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaiTriDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
