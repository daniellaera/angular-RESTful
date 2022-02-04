import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.scss'],
})
export class EmployeesEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  employeeData: any = {};
  showAlert: boolean = false;
  confirmDismissAlert: boolean = false;

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.restApi
      .getEmployee(this.id)
      .subscribe((data) => (this.employeeData = data));
  }
  confirmAlert() {
    this.confirmDismissAlert = true;
    this.updateEmployee();
  }

  closeAlert() {
    this.showAlert = false;
  }

  updateEmployee() {
    this.showAlert = true;
    if (this.confirmDismissAlert) {
      this.restApi
        .updateEmployee(this.id, this.employeeData)
        .subscribe((data) => {
          this.router.navigate(['/employees-list']);
        });
    }
  }
}
