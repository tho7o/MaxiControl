import { Component, OnInit } from '@angular/core';
import * as addnewrecordConstants from './addnewrecord.constants';

@Component({
  selector: 'app-addnewrecord',
  templateUrl: './addnewrecord.component.html',
  styleUrls: ['./addnewrecord.component.css']
})
export class AddnewrecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChangeMinutes(minutes){
    console.log(minutes);
  }

}
