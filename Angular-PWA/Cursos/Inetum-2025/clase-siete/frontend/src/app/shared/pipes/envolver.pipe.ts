import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'envolver'
})
export class EnvolverPipe implements PipeTransform {

  transform(value: string, envoltorio:string): string {
    if (!value || !envoltorio) {
      return value;
    }

    return `${envoltorio} ${value} ${envoltorio}`;
  }

}