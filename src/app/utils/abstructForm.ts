import { FormControl, Validators, FormGroup} from '@angular/forms';

export abstract class AbstructForm {
    public getFormControl(value: any, config?: object) {
        const validators = [];
        for (const key in config) {
            if (config.hasOwnProperty(key)) {
                if (typeof config[key] === 'boolean' && config[key]) {
                    validators.push(Validators[key]);
                } else {
                    validators.push(Validators[key](config[key]));
                }
            }
        }
        return new FormControl(value, validators);
    }
    public checkControlMarkAsTouched(form: FormGroup) {
        if (form.invalid) {
            for (const control in form.controls) {
                form.controls[control].markAsTouched();
            }
            return false;
        }
        return true;
    }
    public getValuesForm(form: FormGroup) {
        const body: object = {};
        for (const key in form.controls) {
            if (form.controls.hasOwnProperty(key)) {
                body[key] = form.controls[key].value;
            }
        }
        return body;
    }
}
