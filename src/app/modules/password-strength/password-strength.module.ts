import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { InfoComponent } from './components/info/info.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { ScoreComponent } from './components/score/score.component';
import { InputPasswordComponent } from './pages/input-password/input-password.component';
import { PasswordStrengthRoutingModule } from './password-strength.routing';

@NgModule({
  declarations: [
    InfoComponent,
    InputPasswordComponent,
    PasswordStrengthComponent,
    ScoreComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordStrengthRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
  ]
})
export class PasswordStrengthModule { }
