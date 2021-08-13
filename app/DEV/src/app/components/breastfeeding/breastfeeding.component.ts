import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-breastfeeding',
  templateUrl: './breastfeeding.component.html',
  styleUrls: ['./breastfeeding.component.css']
})
export class BreastfeedingComponent implements OnInit {

  public breastFeedings : Array<{}> = [];

  constructor(
    private _router: Router,
    private _mainService: MainService
  ) { }

  ngOnInit(): void {
    this._mainService.getBreastFeeding().subscribe(
      response => {
        this.breastFeedings = response.breastFeedings;
      });
  }

  goToNew(){
    this._router.navigateByUrl("/new");
  }

}
