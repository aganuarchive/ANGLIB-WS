import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpLibComponent } from './exp-lib.component';

describe('ExpLibComponent', () => {
  let component: ExpLibComponent;
  let fixture: ComponentFixture<ExpLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
