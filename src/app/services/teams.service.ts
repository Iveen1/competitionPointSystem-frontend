import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateTeam} from "../info/CreateTeam";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
  observe: 'response'
}

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  constructor(private http: HttpClient) {
  }

  createTeam(data: CreateTeam) {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/api/teams/create`, data, httpOptions)
  }

  getTeams(page: number, size: number = 30) {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/api/teams?size=${size}&page=${page}`, httpOptions);
  }

  getTeamById(id: number) {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/api/teams/${id}`, httpOptions)
  }

  updateTeam(id: number, data: CreateTeam) {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/api/teams/modify/${id}`, httpOptions)
  }

  deleteTeam(id: number) {
    // @ts-ignore
    return this.http.delete(`http://localhost:8080/api/teams/delete/${id}`, httpOptions)
  }

  addParticipant(participantId: number, teamId: number) {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/api/teams/participant/add?participantId=${participantId}&teamId=${teamId}`, httpOptions)
  }

  deleteParticipant(participantId: number, teamId: number) {
    // @ts-ignore
    return this.http.delete(`http://localhost:8080/api/teams/participant/delete?participantId=${participantId}&teamId=${teamId}`, httpOptions)
  }
}
