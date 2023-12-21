import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSectionHomeComponent } from './projects-section-home.component';

describe('ProjectsSectionHomeComponent', () => {
  let component: ProjectsSectionHomeComponent;
  let fixture: ComponentFixture<ProjectsSectionHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsSectionHomeComponent]
    });
    fixture = TestBed.createComponent(ProjectsSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
