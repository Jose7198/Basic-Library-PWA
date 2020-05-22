import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { IsLoggedService } from '../is-logged/is-logged.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  canActivate(route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot) : boolean{
      if(this._loggedIn.isLoggedIn){
        return true
      }else{
        this._router.navigate(['/login'])
        return false
      }
    }

  constructor(private readonly _loggedIn : IsLoggedService,
    private readonly _router : Router) { 

    }
}
