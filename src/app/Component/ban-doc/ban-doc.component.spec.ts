import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanDocComponent } from './ban-doc.component';

describe('BanDocComponent', () => {
  let component: BanDocComponent;
  let fixture: ComponentFixture<BanDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
