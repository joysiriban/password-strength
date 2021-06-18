import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  @Input()
  public score: number;

  public colors = [
    'warn', 'warn', 'accent', 'accent', 'primary'
  ];

  constructor() {
    this.score = 0;
  }
}
