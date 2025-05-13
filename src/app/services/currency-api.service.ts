import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  constructor(private http: HttpClient) { }

  getcurrencydata(country1: string) {
    let url = environment.baseUrl + country1;
    return this.http.get(url);
  }
}
