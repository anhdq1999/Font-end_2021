import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinNongNhatComponent } from './tin-nong-nhat.component';

describe('TinNongNhatComponent', () => {
  let component: TinNongNhatComponent;
  let fixture: ComponentFixture<TinNongNhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinNongNhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinNongNhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
