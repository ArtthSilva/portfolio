import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicBarComponent } from './music-bar.component';

describe('MusicBarComponent', () => {
  let component: MusicBarComponent;
  let fixture: ComponentFixture<MusicBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicBarComponent]
    });
    fixture = TestBed.createComponent(MusicBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
