import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/ad';

getData(entity:Login):Observable <Login>{
 return this.http.post<Login>(`${this.apiUrl}/add`,entity)

}
}