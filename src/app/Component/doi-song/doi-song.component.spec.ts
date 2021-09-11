import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoiSongComponent } from './doi-song.component';

describe('DoiSongComponent', () => {
  let component: DoiSongComponent;
  let fixture: ComponentFixture<DoiSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoiSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoiSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
