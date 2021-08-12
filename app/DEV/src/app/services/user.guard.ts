import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserGuard implements CanActivate {
   public token : string;

  constructor(
   private _router: Router,
   private _userService: UserService,
  ){
     this.token = null;
  }

  canActivate():Observable<boolean>|boolean {
   //   return true
      //Get de token from localstorage
      this.token = localStorage.getItem('token');
      
      //validate token
      if (this.token == null){
         this._router.navigateByUrl("/login");
         return false;
      }else{
         return this._userService.validate(this.token).map( 
            response => {
               if (response.status == true){
                  //please, go ahead
                  return true;
               } else {
                  // ups, get out!
                  this._router.navigateByUrl("/login");
                  return false;
               }
            });
      }
   }
}



