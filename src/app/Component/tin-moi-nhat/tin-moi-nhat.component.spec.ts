import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinMoiNhatComponent } from './tin-moi-nhat.component';

describe('TinMoiNhatComponent', () => {
  let component: TinMoiNhatComponent;
  let fixture: ComponentFixture<TinMoiNhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinMoiNhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinMoiNhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
