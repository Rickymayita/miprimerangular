import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimercomponenteComponent } from './primercomponente/primercomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimercomponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
