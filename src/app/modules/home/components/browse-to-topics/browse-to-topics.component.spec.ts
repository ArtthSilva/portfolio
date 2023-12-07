import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseToTopicsComponent } from './browse-to-topics.component';

describe('BrowseToTopicsComponent', () => {
  let component: BrowseToTopicsComponent;
  let fixture: ComponentFixture<BrowseToTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseToTopicsComponent]
    });
    fixture = TestBed.createComponent(BrowseToTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
