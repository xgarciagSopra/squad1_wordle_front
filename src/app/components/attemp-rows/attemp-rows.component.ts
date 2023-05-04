import { Component, Input } from '@angular/core';
import { Attempt } from 'src/app/interfaces/attempt.interface';

@Component({
  selector: 'app-attemp-rows',
  templateUrl: './attemp-rows.component.html',
  styleUrls: ['./attemp-rows.component.scss'],
})
export class AttempRowsComponent {
  @Input() attempsRows!: Attempt[];
}
