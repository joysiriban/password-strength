import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputPasswordComponent } from './pages/input-password/input-password.component';

export const routes: Routes = [
  {
    path: '',
    component: InputPasswordComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordStrengthRoutingModule { }
