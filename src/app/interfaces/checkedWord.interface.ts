import { Letter } from './letter-status.interface';

export interface CheckedWordResponse {
  wordExists: boolean;
  positionOfWordResponseList: Letter[];
  roundWind: boolean;
}
