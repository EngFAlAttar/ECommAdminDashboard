import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): "red"|"orange"|"green" | "grey" {
    if(value === 0)
      return "grey"
    if(value < 10)
      return "red"
    if(value < 20)
      return "orange"
    return "green";
  }

}
