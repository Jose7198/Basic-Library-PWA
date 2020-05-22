import { Injectable } from '@angular/core';
import { User } from 'src/app/dto/User';
import { UserHttpService } from '../user-http/user-http.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService {

  isLoggedIn = false
  user : User = null

  constructor(private readonly _userHttp : UserHttpService) { }

  async login(userName : string, password : string) {
    
    var credential = {
      userName : userName,
      password : password
    }

    try{
      var login$ = await this._userHttp.customPost('/login',credential).toPromise()

      this.user = login$
      this.isLoggedIn = true
    }catch(error){
      console.log(error)
        this.isLoggedIn = false
    }

    return this.isLoggedIn
  }
}
