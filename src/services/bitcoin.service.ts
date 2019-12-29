import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class BitcoinService {

    constructor(private http: HttpClient) { }

    getRate(): Observable<Object> {
        return this.http.get('https://blockchain.info/tobtc?currency=USD&value=1&cors=true')
    }

}
