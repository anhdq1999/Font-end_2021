import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoiSuDetailComponent } from './thoi-su-detail.component';

describe('ThoiSuDetailComponent', () => {
  let component: ThoiSuDetailComponent;
  let fixture: ComponentFixture<ThoiSuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoiSuDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoiSuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
