import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IData } from '../models/idata';
import { JSON_API_URL, MOK_API_URL } from '../tokens/tokens';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private httpClient: HttpClient,
              @Inject(MOK_API_URL) private mokApiUrl: string,
              @Inject(JSON_API_URL) private jsonApiUrl: string
    ) { }

  fetchData(): Observable<IData[]> {
    return this.httpClient.get<IData[]>(this.mokApiUrl);
    
  }

  fetchUsers() {
    return this.httpClient.get(this.jsonApiUrl);
  }

}
