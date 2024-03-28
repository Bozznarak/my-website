import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerzuhrComponent } from './components/herzuhr/herzuhr.component';
import { SchachuhrComponent } from './components/schachuhr/schachuhr.component';
import { SettingsOverlayComponent } from './components/schachuhr/settings-overlay/settings-overlay.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HerzuhrComponent,
    SchachuhrComponent,
    SettingsOverlayComponent,
    HeaderComponent,
    ContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
  providers: [ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
