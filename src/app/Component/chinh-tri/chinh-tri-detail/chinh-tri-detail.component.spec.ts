import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhTriDetailComponent } from './chinh-tri-detail.component';

describe('ChinhTriDetailComponent', () => {
  let component: ChinhTriDetailComponent;
  let fixture: ComponentFixture<ChinhTriDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinhTriDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhTriDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
