import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  currentUserName: BehaviorSubject<string> = new BehaviorSubject<string>('Anonyme')

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    /* this.http.post<string>('backendUrl/login', {
      user : username,
      pass: password
    }).subscribe({
      next: userBackEndName => this.currentUserName.next(userBackEndName)
    }) */
    this.currentUserName.next(username)
  }

  logout() {
    this.currentUserName.next('Anonyme')
  }
}
