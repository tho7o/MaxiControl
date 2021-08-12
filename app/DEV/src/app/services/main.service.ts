import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable()
export class MainService {
    private url:string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }


     //get records
     getRecords(): Observable<any>{
		const headers = new HttpHeaders().set('Content-Type','application/json')
                                         .set('Authorization', localStorage.getItem('token'));
		return this._http.get(this.url+'productivity/devProductivity/', {headers: headers});
	}

    //set record
    setRecord(): Observable<any>{
		const headers = new HttpHeaders().set('Content-Type','application/json')
                                         .set('Authorization', localStorage.getItem('token'));
		return this._http.post(this.url+'productivity/devProductivity/', {headers: headers});
	}


}