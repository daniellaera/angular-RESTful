import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCreateComponent } from './employees-create.component';

describe('EmployeesCreateComponent', () => {
  let component: EmployeesCreateComponent;
  let fixture: ComponentFixture<EmployeesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
