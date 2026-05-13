import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SGetConfirmComponent } from './s-get-confirm.component';

describe('SGetConfirmComponent', () => {
  let component: SGetConfirmComponent;
  let fixture: ComponentFixture<SGetConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SGetConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SGetConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
