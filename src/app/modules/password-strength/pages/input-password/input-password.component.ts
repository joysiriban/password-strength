import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {
    public form: FormGroup;
    public hide = true;
    
    get passwordControl(): any { return this.form.get('password'); }

    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        password: ['', Validators.required]
      });
    }
}
