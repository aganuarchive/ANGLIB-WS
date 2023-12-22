import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessFormSubmitComponent } from './process-form-submit.component';

describe('ProcessFormSubmitComponent', () => {
  let component: ProcessFormSubmitComponent;
  let fixture: ComponentFixture<ProcessFormSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessFormSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessFormSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
