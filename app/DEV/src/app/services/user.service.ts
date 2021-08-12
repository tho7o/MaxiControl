import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { User } from '../models/user.model';

@Injectable()
export class UserService implements OnInit{
    private url :string;
    private userSession: boolean;
    private myToken: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    ngOnInit(): void {}

    Session(session){
        this.userSession = session;
    }

    getSession(){
        this.myToken = localStorage.getItem('token')
        const response = (this.myToken) ? true : false;
        return response;
        // return this.userSession;
    }

    //token validation
    validate(token): Observable<any>{
		const headers = new HttpHeaders().set('Content-Type','application/json')
                                         .set('Authorization', token);
		return this._http.get(this.url+'user/validate', {headers: headers});
	}


    //login user
    login(user: User): Observable<any>{
		const params = JSON.stringify(user);
		const headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'user/login',params, {headers: headers});
	}



}

