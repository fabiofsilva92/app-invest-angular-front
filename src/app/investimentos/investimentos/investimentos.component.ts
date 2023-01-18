import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { InvestimentosService } from './../services/investimentos.service';
import { Component, OnInit } from '@angular/core';

import { Investimento } from './../model/investimento';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {

  investimentos$ : Observable<Investimento[]>;
  displayedColumns = ['pessoa.nome', 'investimento', 'rendimento', 'banco.nome', 'data', 'vencimento', 'valor']

  constructor(
    private investimentosService: InvestimentosService,
    public dialog: MatDialog
    ) {
     this.investimentos$ = this.investimentosService.list()
     .pipe(
      catchError(error => {
        this.onError('Erro ao carregar investimentos');
        console.log(error)
        return of([])
      })
     );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }

}
