import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo1',
  imports: [FormsModule],
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.scss'
})
export class Exo1Component {
  nompersos : string = '';
  niveau : number = 0;
  race : string = '';
  classe : string = '';
  fiche : string ='';
  img : string = '';
  imageFiche : string ='';
  texteAlternarftifImg : string = '';

  genererFiche() : void{
    this.imageFiche = this.img; 
    this.texteAlternarftifImg = this.race;
    this.fiche = `Nom : ${this.nompersos}, Niveau : ${this.niveau}, Race : ${this.race}, Classe : ${this.classe}.`

  }
}
