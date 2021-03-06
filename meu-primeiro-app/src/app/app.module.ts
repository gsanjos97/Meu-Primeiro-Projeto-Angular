import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meuPrimeiro.component';
import { MeuSegundoCliComponent } from './meu-segundo-cli/meu-segundo-cli.component';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroComponent, MeuSegundoCliComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
