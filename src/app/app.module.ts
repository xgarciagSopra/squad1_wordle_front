import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { GameCenterComponent } from './components/game-center/game-center.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorRoundDialogComponent } from './components/error-round-dialog/error-round-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    ResultBoxComponent,
    GameCenterComponent,
    ErrorRoundDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
