import { Routes } from '@angular/router';
import { Demo1Component } from './demo/demo1/demo1.component';
import { HomeComponent } from './pages/home/home.component';
import { Exo1Component } from './exos/exo1/exo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { TimerComponent } from './exos/timer/timer.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { Exo3Component } from './exos/exo3/exo3.component';

export const routes: Routes = [
    // On indique que pour l'url localhost:4200/demo1 il faudra charger le composant demo1 dans 
    {path : 'demo1', component : Demo1Component},
    {path : 'demo2', component : Demo2Component},
    {path : 'demo3', component : Demo3Component},
    {path : 'exo1', component : Exo1Component},
    {path : 'exo3', component : Exo3Component},
    {path :'timer',component : TimerComponent},
    {path : '', component : HomeComponent}
];
