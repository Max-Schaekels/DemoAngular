import { Routes } from '@angular/router';
import { Demo1Component } from './demo/demo1/demo1.component';
import { HomeComponent } from './pages/home/home.component';
import { Exo1Component } from './exos/exo1/exo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { TimerComponent } from './exos/timer/timer.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { Exo3Component } from './exos/exo3/exo3.component';
import { Demo4Component } from './demo/demo4/demo4.component';
import { Exo4Component } from './exos/exo4/exo4.component';
import { Demo5Component } from './demo/demo5/demo5.component';
import { Exo5Component } from './exos/exo5/exo5.component';
import { Demo6Component } from './demo/demo6/demo6.component';
import { AddUserComponent } from './demo/demo6/add-user/add-user.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { DetailsUserComponent } from './demo/demo6/details-user/details-user.component';
import { Exo6Component } from './exos/exo6/exo6.component';
import { AddTacheComponent } from './exos/exo6/add-tache/add-tache.component';
import { DetailsTacheComponent } from './exos/exo6/details-tache/details-tache.component';
import { EditTacheComponent } from './exos/exo6/edit-tache/edit-tache.component';

export const routes: Routes = [
    // On indique que pour l'url localhost:4200/demo1 il faudra charger le composant demo1 dans 
    {path : 'demo1', component : Demo1Component},
    {path : 'demo2', component : Demo2Component},
    {path : 'demo3', component : Demo3Component},
    {path : 'demo4', component : Demo4Component},
    {path : 'demo5', component : Demo5Component},
    {path : 'demo6', component : Demo6Component},
    {path : 'demo6/add', component : AddUserComponent},
    {path : 'demo6/details/:id', component : DetailsUserComponent},

    {path : 'exo1', component : Exo1Component},
    {path : 'exo3', component : Exo3Component},
    {path : 'exo4', component : Exo4Component},
    {path : 'exo5', component : Exo5Component},
    {path : 'exo6', component : Exo6Component},
    {path : 'exo6/add', component : AddTacheComponent},
    {path : 'exo6/details/:id', component : DetailsTacheComponent},
    {path : 'exo6/edit/:id', component : EditTacheComponent},
    {path :'timer',component : TimerComponent},
    {path : '', component : HomeComponent},

    {path : 'notfound', component : NotfoundComponent},

    //Attention ce chemin doit être à la fin puisque le ** signifie toutes les routes non déclarées
    {path : '**', redirectTo : '/notfound'}

];
