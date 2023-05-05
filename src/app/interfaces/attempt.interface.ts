import { Letter } from './letter-status.interface';

export interface Attempt {
  round: number;
  letters: Letter[];
}
