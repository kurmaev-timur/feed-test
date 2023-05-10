import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber',
})
export class ShortNumberPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 1000 && value < 1000000) {
      return (value / 1000).toFixed(1) + 'K';
    } else if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else {
      return value.toString();
    }
  }
}
