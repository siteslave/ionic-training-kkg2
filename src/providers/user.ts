import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { IUser } from '../models';

@Injectable()
export class UserProvider {
  
  constructor(private http: Http, @Inject('API_URL') public apiUrl: string) {
  
   }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiUrl}/users`)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }  

  registerToken(token: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { token: token };

      this.http.post(`${this.apiUrl}/register`, body, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err));
    })
  } 

  getGroups() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiUrl}/groups`)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }  

  remove(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.apiUrl}/users/${id}`)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }  

  getDetail(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiUrl}/users/${id}`)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }  

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { username: username, password: password };

      this.http.post(`${this.apiUrl}/login`, body, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }  

  save(user: IUser) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post(`${this.apiUrl}/users`, user, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }  
}
