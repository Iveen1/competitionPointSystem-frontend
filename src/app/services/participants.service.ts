import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateParticipant} from "../info/CreateParticipant";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
  observe: 'response'
}
@Injectable({
  providedIn: 'root'
})

export class ParticipantsService {
  constructor(private http: HttpClient) {
  }

  createParticipant(data: CreateParticipant) {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/api/participants/create`, data, httpOptions)
  }

  getParticipants(page: number, size: number = 30) {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/api/participants?size=${size}&page=${page}`, httpOptions);
  }

  getParticipantsById(id: number) {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/api/participants/${id}`, httpOptions)
  }

  updateParticipant(id: number, data: CreateParticipant) {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/api/participants/modify/${id}`, data, httpOptions)
  }
  deleteParticipant(id: number) {
    // @ts-ignore
    return this.http.delete(`http://localhost:8080/api/participants/delete/${id}`, httpOptions)
  }
}
