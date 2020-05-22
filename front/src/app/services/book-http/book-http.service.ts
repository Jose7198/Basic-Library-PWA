import { Injectable } from '@angular/core';
import { PrincipalHttpService } from '../http-principal/principal-http.service';
import { Book } from 'src/app/dto/Book';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService extends PrincipalHttpService<Book> {

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url, '/Book')
   }
}
