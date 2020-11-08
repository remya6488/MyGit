import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/User';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
  }

  getUsers(){
    console.log(`api call : all users - ${API_URL}`);
    return this.http.get<User[]>(`${API_URL}`);
  }
  getUserById(id: string){
    return this.http.get<User>(`${API_URL}/${id}`);
  }
  addUser(user: User){
    return this.http.post(`${API_URL}`,user);
  }
  updateUser(user: User){
    return this.http.put(`${API_URL}`,user);
  }
  deleteUser(id: string){
    return this.http.delete(`${API_URL}/${id}`);
  }
}
