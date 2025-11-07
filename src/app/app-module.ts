import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { provideHttpClient } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { ServicePersonas } from './service/service.persona';
import { PersonasStandaAloComponent } from './components/personas-standa-alo.component/personas-standa-alo.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    PersonasapiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasStandaAloComponent
],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServicePersonas
  ],
  bootstrap: [App]
})
export class AppModule { }
