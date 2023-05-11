import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCenterComponent } from './components/game-center/game-center.component';
import { RecordComponent } from './components/record/record.component';

const routes: Routes = [
  {path: '', component: GameCenterComponent},
  {path: 'userRecord', component: RecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
