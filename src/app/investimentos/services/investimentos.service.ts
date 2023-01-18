import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { Investimento } from '../model/investimento';

@Injectable({
  providedIn: 'root'
})
export class InvestimentosService {

  private readonly API = 'http://localhost:8080/api/invest'

  constructor(private httpClient: HttpClient) { }

  list() : Observable<Investimento[]>{
    return this.httpClient.get<Investimento[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap((investimento: any) => console.log(investimento))
    );

  }

}
