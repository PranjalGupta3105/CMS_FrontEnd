import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInterviewsComponent } from './register-interviews.component';

describe('RegisterInterviewsComponent', () => {
  let component: RegisterInterviewsComponent;
  let fixture: ComponentFixture<RegisterInterviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInterviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
