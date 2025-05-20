import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class MisValidadores {
    static noPedroFn() : ValidatorFn {
        
        return (control: AbstractControl) => {
            if (control.value === "Pedro") {
                return { noPedro: true };
            }
            return null;
       }
   }

   static noPedro(control: AbstractControl) : ValidationErrors | null {
        
        if (control.value === "Pedro") {
            return { noPedro: true };
        }
        return null;
   }
}