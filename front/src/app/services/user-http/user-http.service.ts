import { Injectable } from '@angular/core';
import { PrincipalHttpService } from '../http-principal/principal-http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/dto/User';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService extends PrincipalHttpService<User>{

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url,'/Usuario')
  }
}
