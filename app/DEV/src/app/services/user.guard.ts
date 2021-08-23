import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
// import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable()
export class UserGuard implements CanActivate {
   private url :string;
   public token : string;

  constructor(
   private _router: Router,
   private _userService: UserService,
   public _http: HttpClient
  ){
     this.token = null;
     this.url = GLOBAL.url;
  }

  //Valida el token con el servicio de USER validate token
   canActivate(): Promise <any> {
      return new Promise( async resolve => {
         const headers = new HttpHeaders().set('Content-Type','application/json')
                                          .set('Authorization', localStorage.getItem('token'));
         this._http.get(this.url+'user/validate', {headers: headers})
         .toPromise()
         .then(
            res => {
               // console.log(res);
               resolve(true);
         },
            err => {
               // console.log(err.error.message);
               this._router.navigateByUrl("/login");
               // alert('sesion expirada')
               resolve(false)
               
            })
      });
      }






}

