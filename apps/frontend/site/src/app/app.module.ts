import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {FrontendUiModule} from "@rwa/frontend/ui";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    FrontendUiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
