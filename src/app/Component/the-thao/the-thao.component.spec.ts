import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheThaoComponent } from './the-thao.component';

describe('TheThaoComponent', () => {
  let component: TheThaoComponent;
  let fixture: ComponentFixture<TheThaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheThaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheThaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
