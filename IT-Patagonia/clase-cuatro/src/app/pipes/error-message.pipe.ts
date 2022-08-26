import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value.required) return "El campo es requerido";
    if (value.min) return "El campo es muy chico."
    if (value.max) return "El campo es muy grande."
    return "----";
  }

}
