import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from './models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://api.karrlein.com/resume/v1/experience/';

  constructor(private _http: HttpClient) { }

  getExperience() {
    return this._http.get<Experience[]>(this.apiUrl);
  }
}
