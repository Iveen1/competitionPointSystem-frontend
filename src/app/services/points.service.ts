import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
  observe: 'response'
}

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor() { }
}
