import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './components/game-center/keyboard/keyboard.component';
import { ResultBoxComponent } from './components/game-center/result-box/result-box.component';
import { GameCenterComponent } from './components/game-center/game-center.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RecordComponent } from './components/record/record.component';
import { RecordContentComponent } from './components/record-content/record-content.component';
import { ErrorRoundDialogComponent } from './components/game-center/error-round-dialog/error-round-dialog.component';
import { WinRoundDialogComponent } from './components/game-center/win-round-dialog/win-round-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameOverDialogComponent } from './components/game-center/game-over-dialog/game-over-dialog.component';
import { AttempRowsComponent } from './components/game-center/attemp-rows/attemp-rows.component';

@NgModule({
  declarations: [
    RecordContentComponent,
    RecordComponent,
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
    RecordComponent,
    RecordContentComponent,
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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
