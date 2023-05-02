import { Letter } from './letter-status.interface';

export interface CheckedWord {
  wordExists: boolean;
  positionOfWordResponseList: Letter[];
  roundWind: boolean;
}
