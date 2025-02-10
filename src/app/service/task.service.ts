
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private backendUrl = 'http://172.16.8.24:8080/api/todos';
private httpOptions = {
  Headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  }),
};
  constructor(private http: HttpClient) {}
}
