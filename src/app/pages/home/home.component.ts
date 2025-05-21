import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  today : Date = new Date(); // Date du jour

  prenom : string = ''; 
  bonjour : string ='';

  direBonjour() : void {
    this.bonjour = `Bonjour ${this.prenom}, bienvenu !`;

  }
}
