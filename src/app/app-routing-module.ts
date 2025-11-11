import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { PlantillaComponents } from './components/plantilla-components/plantilla-components';
import { PlantillaMultipleComponents } from './components/plantilla-multiple-components/plantilla-multiple-components';

const routes: Routes = [
 
  { path: 'plantilla', component: PlantillaComponents },
  { path: 'plantillamul', component: PlantillaMultipleComponents },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
