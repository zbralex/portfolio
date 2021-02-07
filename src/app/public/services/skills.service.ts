import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }


  // service will be added after init database with web-server

  getSkills() {
    this.http.get(``)
  }
}
