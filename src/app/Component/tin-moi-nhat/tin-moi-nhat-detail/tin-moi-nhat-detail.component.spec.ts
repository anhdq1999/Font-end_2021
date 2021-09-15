import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinMoiNhatDetailComponent } from './tin-moi-nhat-detail.component';

describe('TinMoiNhatDetailComponent', () => {
  let component: TinMoiNhatDetailComponent;
  let fixture: ComponentFixture<TinMoiNhatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinMoiNhatDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinMoiNhatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
