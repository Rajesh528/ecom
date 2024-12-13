import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;

  constructor(public http:HttpClient) { }

  getUsers(){
    
    return this.http.get(`${environment.apiUrl}/users`);
  }
  getUserDetails(id:any){
    return this.http.get(`${environment.apiUrl}/users/${id}`)
  
  }
  addUser(user: any) {
    return this.http.post(environment.apiUrl, user);
  }

  deleteUser(id: any) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }

  setData(data:any){
    this.data = data.data;
    console.log(data.data)
  }

  getData(){
    console.log(this.data)
    return this.data
  }

}
