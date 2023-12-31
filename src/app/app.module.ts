import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerzuhrComponent } from './herzuhr/herzuhr.component';
import { SchachuhrComponent } from './schachuhr/schachuhr.component';
import { SettingsOverlayComponent } from './schachuhr/settings-overlay/settings-overlay.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HerzuhrComponent,
    SchachuhrComponent,
    SettingsOverlayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
