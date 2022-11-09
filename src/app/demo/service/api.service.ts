import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }


  getRequisiciones(){
    return this.http.get('http://localhost:9000/api/requisiciones/');
  }
}
