import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedMusicPageComponent } from './liked-music-page.component';

describe('LikedMusicPageComponent', () => {
  let component: LikedMusicPageComponent;
  let fixture: ComponentFixture<LikedMusicPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikedMusicPageComponent]
    });
    fixture = TestBed.createComponent(LikedMusicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
