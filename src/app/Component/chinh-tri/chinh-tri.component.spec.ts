import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhTriComponent } from './chinh-tri.component';

describe('ChinhTriComponent', () => {
  let component: ChinhTriComponent;
  let fixture: ComponentFixture<ChinhTriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinhTriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
