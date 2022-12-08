import { InvestimentosService } from './../services/investimentos.service';
import { Component, OnInit } from '@angular/core';

import { Investimento } from './../model/investimento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {

  investimentos : Observable<Investimento[]>;
  displayedColumns = ['pessoa.nome', 'investimento', 'rendimento', 'banco.nome', 'data', 'vencimento', 'valor']

  constructor(private investimentosService: InvestimentosService) {
     this.investimentos = this.investimentosService.list();
  }

  ngOnInit(): void {
  }

}
