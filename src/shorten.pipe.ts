import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone:true
})
export class ShortenPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 100) {
      return value.substr(0, 80) + ' ...';
    } else {
      return value;
    }
  }
}
