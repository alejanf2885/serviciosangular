import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { provideHttpClient } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { ServicePersonas } from './service/service.persona';
import { PersonasStandaAloComponent } from './components/personas-standa-alo.component/personas-standa-alo.component';
import { ServiceCoche } from './service/service.coche';
import { CochesComponents } from './components/coches-components/coches-components';
import { PlantillaComponents } from './components/plantilla-components/plantilla-components';
import { ServicePlantillas } from './service/service.plantillas';
import { FormsModule } from '@angular/forms';
import { PlantillaMultipleComponents } from './components/plantilla-multiple-components/plantilla-multiple-components';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    PersonasapiComponent,
    CochesComponents,
    PlantillaComponents,
    PlantillaMultipleComponents,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PersonasStandaAloComponent,
    
],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServicePersonas,
    ServiceCoche,
    ServicePlantillas,
  ],
  bootstrap: [App]
})
export class AppModule { }
