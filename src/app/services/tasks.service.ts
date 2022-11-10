import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateTask} from "../info/CreateTask";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
  observe: 'response'
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) {
  }

  createTask(data: CreateTask) {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/api/tasks/create`, data, httpOptions)
  }

  getTasks(page: number, size: number = 30) {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/api/tasks?size=${size}&page=${page}`, httpOptions);
  }

  getTaskById(id: number) {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/api/tasks/${id}`, httpOptions)
  }

  updateTask(id: number, data: CreateTask) {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/api/tasks/modify/${id}`, data, httpOptions)
  }

  deleteTask(id: number) {
    // @ts-ignore
    return this.http.delete(`http://localhost:8080/api/tasks/delete/${id}`, httpOptions)
  }
}
