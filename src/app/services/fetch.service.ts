import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IData } from '../models/idata';
import { MOK_API_URL } from '../tokens/tokens';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private httpClient: HttpClient,
              @Inject(MOK_API_URL) private mokApiUrl: string,
    ) { }

  fetchData(): Observable<IData[]> {
    return this.httpClient.get<IData[]>(this.mokApiUrl);
    
  }
}
