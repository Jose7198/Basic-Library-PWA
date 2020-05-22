import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrincipalHttpService } from '../http-principal/principal-http.service';
import { Bill } from 'src/app/dto/Bill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillHttpService extends PrincipalHttpService<Bill>{

  constructor(private readonly _clientHttp : HttpClient) {
    super(_clientHttp, environment.url, '/Bill')
   }
}
