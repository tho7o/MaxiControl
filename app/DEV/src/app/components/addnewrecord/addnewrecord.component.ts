import { Component, OnInit } from '@angular/core';
import * as addnewrecordConstants from './addnewrecord.constants';

@Component({
  selector: 'app-addnewrecord',
  templateUrl: './addnewrecord.component.html',
  styleUrls: ['./addnewrecord.component.css']
})
export class AddnewrecordComponent implements OnInit {
  private pis: boolean = false;
  private pop: boolean = false;
  private bfMinutes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeMinutes(minutes){
    this.bfMinutes = minutes
    console.log('minutes: ', this.bfMinutes);
  }

  onChangeDiapper(value){
    if (value == 1 ) this.pis = (this.pis) ? false : true
    if (value == 2 ) this.pop = (this.pop) ? false : true

    console.log('pis: ', this.pis);
    console.log('pop: ', this.pop);
  }

  setBreastFeeding(){
    console.log('ok bf');
  }

  setDiapper(){
    console.log('ok dp');
  }
}
