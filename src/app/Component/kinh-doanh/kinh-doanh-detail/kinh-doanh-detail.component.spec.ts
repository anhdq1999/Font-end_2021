import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinhDoanhDetailComponent } from './kinh-doanh-detail.component';

describe('KinhDoanhDetailComponent', () => {
  let component: KinhDoanhDetailComponent;
  let fixture: ComponentFixture<KinhDoanhDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinhDoanhDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinhDoanhDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
