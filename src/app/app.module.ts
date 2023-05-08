import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { GameCenterComponent } from './components/game-center/game-center.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorRoundDialogComponent } from './components/error-round-dialog/error-round-dialog.component';
import { WinRoundDialogComponent } from './components//win-round-dialog/win-round-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { GameOverDialogComponent } from './components/game-over-dialog/game-over-dialog.component';
import { AttempRowsComponent } from './components/attemp-rows/attemp-rows.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    ResultBoxComponent,
    GameCenterComponent,
    ErrorRoundDialogComponent,
    HeaderComponent,
    FooterComponent,
    WinRoundDialogComponent,
    LoginComponent,
    GameOverDialogComponent,
    AttempRowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
