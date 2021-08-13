import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-diappers',
  templateUrl: './diappers.component.html',
  styleUrls: ['./diappers.component.css']
})
export class DiappersComponent implements OnInit {

  public diappers : Array<{}> = [];

  constructor(
    private _router: Router,
    private _mainService: MainService
  ) { }

  ngOnInit(): void {
    this._mainService.getDiappers().subscribe(
      response => {
        this.diappers = response.diappers;
      });
  }

  goToNew(){
    this._router.navigateByUrl("/new");
  }

}
