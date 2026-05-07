import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDashobardComponent } from './movie-dashobard.component';

describe('MovieDashobardComponent', () => {
  let component: MovieDashobardComponent;
  let fixture: ComponentFixture<MovieDashobardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDashobardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDashobardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
