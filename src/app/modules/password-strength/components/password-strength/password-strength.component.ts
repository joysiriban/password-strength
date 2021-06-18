import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

import { PasswordStrengthService } from '@modules/password-strength/services/password-strength.service';
import { PasswordInfoInterface } from '../../models';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnInit,OnChanges {
  public info: PasswordInfoInterface;

  @Input()
  public password: FormControl;

  constructor(
    private _passwordStrengthService: PasswordStrengthService,
  ) { }

  ngOnInit() {}

  ngOnChanges() {
    this.checkPasswordStrength();
  }

  checkPasswordStrength(): Subscription {
    return this.password
      .valueChanges
      .pipe(
        filter((term: string) => term.length > 0),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value: string) => {
          return this._passwordStrengthService.passwordStrength(value);
        })
      )
      .subscribe(
        (result: PasswordInfoInterface) => {
          this.info = result;
        },
        (err: any) => {}
      );
  }
}
