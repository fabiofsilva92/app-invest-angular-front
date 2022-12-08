import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

import { Investimento } from '../model/investimento';

@Injectable({
  providedIn: 'root'
})
export class InvestimentosService {

  private readonly API = '/assets/investimentos.json'

  constructor(private httpClient: HttpClient) { }

  list() : Observable<Investimento[]>{
    return this.httpClient.get<Investimento[]>(this.API)
    .pipe(
      first(),
      tap((investimento: any) => console.log(investimento))
    );

  }

}
