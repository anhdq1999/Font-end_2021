import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoiSongDetailComponent } from './doi-song-detail.component';

describe('DoiSongDetailComponent', () => {
  let component: DoiSongDetailComponent;
  let fixture: ComponentFixture<DoiSongDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoiSongDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoiSongDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
