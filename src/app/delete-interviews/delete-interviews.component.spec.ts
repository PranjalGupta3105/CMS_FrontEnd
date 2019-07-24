import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInterviewsComponent } from './delete-interviews.component';

describe('DeleteInterviewsComponent', () => {
  let component: DeleteInterviewsComponent;
  let fixture: ComponentFixture<DeleteInterviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteInterviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
