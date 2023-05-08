import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import {
  HttpClient,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { tap, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { requestOptions } from '../contsglobal/service';

@Injectable()
export class AdamAutenticadorService {
  private loginapi = environment.api + '/login';
  constructor(private http: HttpClient) {}
  // seta os dados de login
  private setSession(authResult ) {
    console.log(authResult)
    const token = authResult.token;
    localStorage.setItem('token', authResult.token);
    localStorage.setItem("username" , authResult.username)
  }
  // pega o token
  get token(): string {
    return localStorage.getItem('token');
  }
  get Username() : string {
    return localStorage.getItem('username');
  }
  // realizar o login
  login(username: string, password: string  ) {
    const logn = {
        username : username , 
        password : password, 
      
    }
    return this.http.post(this.loginapi, logn  , requestOptions ).pipe(
      tap((response) => this.setSession(response )),
      shareReplay()
    );
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }
}
interface JWTPayload {
  id: number;
  username: string;
  email: string;
  exp: number;
}

interface LoginRequest {
  username : string ;
  password : string ; 
}