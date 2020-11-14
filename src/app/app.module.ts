import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolaireComponent } from './solaire/solaire.component';
import { CadresComponent } from './cadres/cadres.component';

const appRoutes: Routes
 = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'lunette_solaire',
    component: SolaireComponent
  },
  {path : 'cadres_optiques',
  component:CadresComponent
},

  { path: '**', redirectTo: 'home' }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SolaireComponent,
    CadresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
