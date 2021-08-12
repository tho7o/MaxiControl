import { Component, OnInit } from '@angular/core';
import * as errorConstants from './error.constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public componentConstants = errorConstants;

  constructor() { }

  ngOnInit(): void {
  }

}
