import { Injectable } from '@angular/core';
import { PrincipalHttpService } from '../http-principal/principal-http.service';
import { Author } from 'src/app/dto/Author';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorHttpService extends PrincipalHttpService<Author>{

  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient, environment.url, '/Author')
   }
}
