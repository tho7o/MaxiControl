import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diappers',
  templateUrl: './diappers.component.html',
  styleUrls: ['./diappers.component.css']
})
export class DiappersComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  goToNew(){
    this._router.navigateByUrl("/new");
  }

}
