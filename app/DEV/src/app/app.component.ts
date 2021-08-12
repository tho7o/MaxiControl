import { Component, OnInit  } from '@angular/core';
import * as AOS from 'aos';

import { Router, NavigationEnd } from '@angular/router';  // Google Analytics
import { filter } from 'rxjs/operators';                  // Google Analytics

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title: string;
  // public language: string;

  constructor(
    public router: Router // Google Analytics
  ){
   }

  ngOnInit(){
    AOS.init();
  }


}
