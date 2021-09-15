import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanDocDetailComponent } from './ban-doc-detail.component';

describe('BanDocDetailComponent', () => {
  let component: BanDocDetailComponent;
  let fixture: ComponentFixture<BanDocDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanDocDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanDocDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
