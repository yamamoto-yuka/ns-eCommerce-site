import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Products } from './interface'


@Injectable({
    providedIn: 'root'
})
export class CommonService {
    private productURL = 'https://cms.yukayamamoto.me/api/apparelpages?populate=*';
    private url = 'https://cms.yukayamamoto.me/api/auth/local';
    constructor(private http: HttpClient) { }

    getProduct() {
        return this.http.get<Products>(this.productURL);
    }

    login(data: any) {
        return this.http.post<User>(this.url, data);
    }
}
