import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector : '[nottoday]',
    providers : [{ provide : NG_VALIDATORS, useExisting : NotTodayValidatorDirective, multi:true}]
})
export class NotTodayValidatorDirective implements Validator {
    constructor(){
        alert("sdsd");
    }
    validate(control: AbstractControl): ValidationErrors | null {
        alert("hola");
        return {error:"Not Today"};
    }
}
