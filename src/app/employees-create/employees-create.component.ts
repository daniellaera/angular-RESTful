import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from '../shared/employees.model';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.scss']
})
export class EmployeesCreateComponent implements OnInit {

  @Input() employeeDetails: Employees = new Employees;

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/employees-list'])
      })
  }


}
