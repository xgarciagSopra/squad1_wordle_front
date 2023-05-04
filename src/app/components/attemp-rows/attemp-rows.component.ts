import { Component, Input } from '@angular/core';
import { Attempt } from 'src/app/interfaces/attempt.interface';
import { Letter } from 'src/app/interfaces/letter-status.interface';

@Component({
  selector: 'app-attemp-rows',
  templateUrl: './attemp-rows.component.html',
  styleUrls: ['./attemp-rows.component.scss'],
})
export class AttempRowsComponent {
  @Input() attempsRows!: Attempt[];

  newBoxStyles(letter: Letter) {
    return {
      hit: letter.hitStatus === 'HIT',
      partialHit: letter.hitStatus === 'PARTIAL_HIT',
      fail: letter.hitStatus === 'FAIL',
    };
  }
}
