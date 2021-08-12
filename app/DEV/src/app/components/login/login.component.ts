import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import * as loginConstants from './login.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public user : User;
  public status:  string;
  public message: string;
  public componentConstants = loginConstants;

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) {
    this.user = new User("", "", "", "");
    this.status  = null;
    this.message = null;
   }

  ngOnInit(): void {
  }

  /**
   * Función para iniciar sesión
   */
  onSubmit():void {
      if(this.user.email != '' && this.user.password != ''){
        this._userService.login(this.user).subscribe(
          response => {
            
            if(response.status == 'logged'){
              localStorage.setItem('token', response.token);
              this.status = "success";
              this.message = 'Logged successfully';
              this._userService.Session(true);
              
              this._router.navigateByUrl("/new");

              setTimeout(() => {
                this.status = null;
                this.message = null;
              }, 1000);
  
            } else {
              this._userService.Session(false);
              this.status           = "error";
              this.message          = this.componentConstants.BAD_RESPONSE;
              setTimeout(() => {
                this.status         = null;
                this.message        = null;
              }, 5000);
                  }
          },
          error => {
            this._userService.Session(false);
            this.status           = "error";
            this.message          = this.componentConstants.WRONG_CREDENTIALS;
            setTimeout(() => {
              this.status         = null;
              this.message        = null;
            }, 5000);
          });
  
  
      }else{
        this._userService.Session(false);
        this.status           = "error";
        this.message          = this.componentConstants.NOT_CREDENTIALS;
        setTimeout(() => {
          this.status         = null;
          this.message        = null;
        }, 5000);
        }
    

  	}



  /**
   * Función para ir al inicio
   */  
  goToHome():void {
    this._router.navigateByUrl("/");
  }

}
