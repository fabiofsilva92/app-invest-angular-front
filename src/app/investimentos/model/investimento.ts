import { Banco } from './banco';
import { Pessoa } from './pessoa';
export interface Investimento {
  _id: number;
  pessoa: Pessoa;
  investimento: string;
  rendimento: string;
  banco: Banco;
  data: string;
  vencimento: string;
  valor: number;
}
