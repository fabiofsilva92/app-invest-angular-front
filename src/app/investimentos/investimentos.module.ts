import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { InvestimentosRoutingModule } from './investimentos-routing.module';
import { InvestimentosComponent } from './investimentos/investimentos.component';




@NgModule({
  declarations: [
    InvestimentosComponent
  ],
  imports: [
    CommonModule,
    InvestimentosRoutingModule,
    AppMaterialModule
  ]
})
export class InvestimentosModule { }
