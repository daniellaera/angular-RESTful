import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from './employees.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiUrl= 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees> {
    return this.http.get<Employees>(this.apiUrl + '/employees');
  }

  createEmployee(employee): Observable<Employees> {
    return this.http.post<Employees>(this.apiUrl + '/employees', JSON.stringify(employee), this.httpOptions);
  }

  getEmployee(id): Observable<Employees> {
    return this.http.get<Employees>(this.apiUrl + '/employees/' + id);
  }

  updateEmployee(id, employee): Observable<Employees> {
    return this.http.put<Employees>(this.apiUrl + '/employees/' + id,
    JSON.stringify(employee), this.httpOptions);
  }

  deleteEmployee(id) {
    return this.http.delete<Employees>(this.apiUrl + '/employees/' + id);
  }
}
