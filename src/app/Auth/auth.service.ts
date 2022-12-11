import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { signup } from '../models/signup.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<signup[]>('./../../../db.json');
  }

}
