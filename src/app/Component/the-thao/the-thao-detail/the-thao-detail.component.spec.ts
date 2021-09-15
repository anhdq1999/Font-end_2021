import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheThaoDetailComponent } from './the-thao-detail.component';

describe('TheThaoDetailComponent', () => {
  let component: TheThaoDetailComponent;
  let fixture: ComponentFixture<TheThaoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheThaoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheThaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
