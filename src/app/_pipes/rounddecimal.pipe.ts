import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rounddecimal'
})
export class RoundDecimalPipe implements PipeTransform {
  transform(value: any): any {
    return Math.round(value * 100) / 100;
  }
}
