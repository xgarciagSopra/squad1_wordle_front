import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { GameCenterComponent } from './components/game-center/game-center.component';

@NgModule({
  declarations: [AppComponent, KeyboardComponent, ResultBoxComponent, GameCenterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
