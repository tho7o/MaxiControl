import { Component, OnInit } from '@angular/core';
import * as addnewrecordConstants from './addnewrecord.constants';
import { MainService } from '../../services/main.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-addnewrecord',
  templateUrl: './addnewrecord.component.html',
  styleUrls: ['./addnewrecord.component.css']
})
export class AddnewrecordComponent implements OnInit {
  private pis: boolean = false;
  private pop: boolean = false;
  private bfMinutes: number = 0;
  private diapperType : number = 0;

  constructor(
    private _mainService: MainService
  ) { }

  ngOnInit(): void {}

  onChangeMinutes(minutes){
    this.bfMinutes = minutes;
  }

  onChangeDiapper(value){
    if (value == 1 ) this.pis = (this.pis) ? false : true;
    if (value == 2 ) this.pop = (this.pop) ? false : true;
  }

  setBreastFeeding(){
    this._mainService.setBreastFeeding(this.bfMinutes).subscribe(
      response => {
        // console.log(response);
        Swal.fire('BreastFeeding Setted!', '', 'success')  
      });
  }

  setDiapper(){
    this.diapperType = (this.pis && this.pop) ? 3 : this.diapperType;
    this.diapperType = (!this.pis && this.pop) ? 2 : this.diapperType;
    this.diapperType = (this.pis && !this.pop) ? 1 : this.diapperType;
    // console.log(this.diapperType);

    this._mainService.setDiapper(this.diapperType).subscribe(
      response => {
        Swal.fire('Diapper Setted!', '', 'success')  
        // console.log(response);
      });
  }
}
