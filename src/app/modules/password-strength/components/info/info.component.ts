import { Component, Input } from '@angular/core';

import { PasswordInfoInterface } from '../../models';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  @Input()
  public info: PasswordInfoInterface;

  constructor() {}
}
