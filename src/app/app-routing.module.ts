import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GameCenterComponent } from './components/game-center/game-center.component';
import { RecordComponent } from './components/record/record.component';

const routes: Routes = [
  {path: 'game', component: GameCenterComponent},
  {path: 'userRecord', component: RecordComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'game-center', component: GameCenterComponent },
  {path: 'userRecord', component: RecordComponent},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
