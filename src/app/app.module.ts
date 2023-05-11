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
import { GameOverDialogComponent } from './components/game-over-dialog/game-over-dialog.component';
import { AttempRowsComponent } from './components/attemp-rows/attemp-rows.component';
import { RecordComponent } from './components/record/record.component';
import { RecordContentComponent } from './components/record-content/record-content.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
