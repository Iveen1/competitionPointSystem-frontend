import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
  observe: 'response'
}

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  constructor(private http: HttpClient) {
  }

  createPoint(taskId: number, participantId: number, coefficient: number) {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/api/points/create?taskId=${taskId}&participantId=${participantId}&coefficient=${coefficient}`, httpOptions)
  }

  getPoint(page: number, size: number = 30) {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/api/points?size=${size}&page=${page}`, httpOptions);
  }

  getPointById(id: number) {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/api/points/${id}`, httpOptions)
  }

  getPointsByParticipantId(participantId: number) {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/api/points/participant/${participantId}`, httpOptions)
  }

  updatePoint(pointId: number, taskId: number, participantId: number, coefficient: number) {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/api/points/modify/${pointId}?taskId=${taskId}&participantId=${participantId}&coefficient=${coefficient}`, httpOptions)
  }

  deletePoint(id: number) {
    // @ts-ignore
    return this.http.delete(`http://localhost:8080/api/points/delete/${id}`, httpOptions)
  }
}
