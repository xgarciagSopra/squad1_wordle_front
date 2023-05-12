import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GameCenterComponent } from './components/game-center/game-center.component';
import { RecordComponent } from './components/record/record.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'game-center', component: GameCenterComponent },
<<<<<<< HEAD
  {path: 'user-record', component: RecordComponent},
];
=======
  {path: 'userRecord', component: RecordComponent},
>>>>>>> 110b942e03dbb28e9e14556fcd67da42d921d92a

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
