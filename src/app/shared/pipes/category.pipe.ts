import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {

    let retorno = 'code';

    value.includes('Fábio') ? retorno = 'man' : value.includes('Paloma') ? retorno = 'woman' : retorno = 'code';

    return retorno;
  }

}
