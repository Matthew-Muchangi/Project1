import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  //Marks this class as an injectable service, meaning it can be used throughout the app
  providedIn: 'root',
})
export class TaskService {
  private backendUrl = 'http://172.16.11.105:8080/api/tasks';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': Bearer ${token}
    }),
  };
  constructor(private http: HttpClient) {
     
  }

  getAllTask(): Observable<any> {
    const token = window.localStorage.getItem("token");
    return this.http.get(this.backendUrl, this.httpOptions);
  }
}