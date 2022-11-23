import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { JSON_API_URL } from '../tokens/tokens';

@Injectable({
  providedIn: 'root'
})
export class HttpResolver implements Resolve<any> {

  constructor(private httpClient: HttpClient, 
             @Inject(JSON_API_URL) private jsonApiUrl: string,   
    ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.httpClient.get(this.jsonApiUrl);
  }
}
