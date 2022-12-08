import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvestimentosComponent } from './investimentos/investimentos.component';

const routes: Routes = [
  { path: '', component: InvestimentosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestimentosRoutingModule { }
