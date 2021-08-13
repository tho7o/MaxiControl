import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';

@Injectable()
export class MainService {
    private url:string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }


    //get diappers
    getDiappers(): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type','application/json')
                                     .set('Authorization', localStorage.getItem('token'));
    return this._http.get<any>(this.url+'record/diappers/', {headers: headers})
        .map((data: any) => {
            data.diappers.map(e => {
                if (e.diapper_type == 1) e.diapper_type = 'pis!';
                if (e.diapper_type == 2) e.diapper_type = 'pop!';
                if (e.diapper_type == 3) e.diapper_type = 'both';
            })
            return data;
        })
    }

    //set diapper
    setDiapper(type): Observable<any>{
        const params = JSON.stringify({type});
        const headers = new HttpHeaders().set('Content-Type','application/json')
                                            .set('Authorization', localStorage.getItem('token'));
        return this._http.post(this.url+'record/diappers/', params, {headers: headers});
    }

    //get breastfeeding
    getBreastFeeding(): Observable<any>{
		const headers = new HttpHeaders().set('Content-Type','application/json')
                                         .set('Authorization', localStorage.getItem('token'));
		return this._http.get(this.url+'record/breastfeedings/', {headers: headers});
	}

    //set breasfeeding
    setBreastFeeding(minutes): Observable<any>{
        const params = JSON.stringify({minutes});
		const headers = new HttpHeaders().set('Content-Type','application/json')
                                         .set('Authorization', localStorage.getItem('token'));
		return this._http.post(this.url+'record/breastfeedings/', params, {headers: headers});
	}


}