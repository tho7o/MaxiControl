import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import * as navbarConstants from './navbar.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  public logged: boolean;
  public componentConstants = navbarConstants;

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) {
    this.logged = false;
  }

  ngOnInit(): void {
    this.logged = this._userService.getSession();
  }

  /**
   * Función para ir al login
   */
  goToLogin(){
    this._router.navigateByUrl("/login");
  }

  /**
   * Función para ir al inicio
   */
  goToHome(){
    this._router.navigateByUrl("/");
  }

  /**
   * Función para ir a productividad
   */
   goToNew(){
    this._router.navigateByUrl("/new");
  }

      /**
   * Función para ir a productividad
   */
    goToDiappers(){
    this._router.navigateByUrl("/diappers");
  }

    /**
   * Función para ir a productividad
   */
     goToBreastFeeding(){
    this._router.navigateByUrl("/breastfeeding");
  }


  /**
   * Función para cerrar sesión
   */
  goToExit(){
    this._userService.Session(false);
    this.logged = false;
    localStorage.removeItem("token");
    this._router.navigateByUrl("/");
  }

}
