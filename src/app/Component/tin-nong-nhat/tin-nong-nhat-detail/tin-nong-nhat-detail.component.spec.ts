import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinNongNhatDetailComponent } from './tin-nong-nhat-detail.component';

describe('TinNongNhatDetailComponent', () => {
  let component: TinNongNhatDetailComponent;
  let fixture: ComponentFixture<TinNongNhatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinNongNhatDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinNongNhatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
