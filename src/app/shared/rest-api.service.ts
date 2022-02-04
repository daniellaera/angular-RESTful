import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from './employees.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  apiUrl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employees> {
    return this.http.get<Employees>(this.apiUrl + '/employees');
  }

  createEmployee(employee: Employees): Observable<Employees> {
    return this.http.post<Employees>(
      this.apiUrl + '/employees',
      JSON.stringify(employee),
      this.httpOptions
    );
  }

  getEmployee(id: number): Observable<Employees> {
    return this.http.get<Employees>(this.apiUrl + '/employees/' + id);
  }

  updateEmployee(id: number, employee: Employees): Observable<Employees> {
    return this.http.put<Employees>(
      this.apiUrl + '/employees/' + id,
      JSON.stringify(employee),
      this.httpOptions
    );
  }

  deleteEmployee(id: number) {
    return this.http.delete<Employees>(this.apiUrl + '/employees/' + id);
  }
}
