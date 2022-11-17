import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IData } from '../models/idata';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private httpClient: HttpClient) { }

  fetchData(): Observable<IData[]> {
    return this.httpClient.get<IData[]>('http://localhost:3000/data')
    
  }
}
