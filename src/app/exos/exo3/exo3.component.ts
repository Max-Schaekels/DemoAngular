import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo3',
  imports: [CommonModule, FormsModule],
  templateUrl: './exo3.component.html',
  styleUrl: './exo3.component.scss'
})
export class Exo3Component {
  listeCourse : string[] = [];
  mot : string = '';
  textColor : string = 'chartreuse';
  bckColor : string ='pink';


  ajouter() : void{
    const motNettoye = this.mot.trim().toLowerCase();
    if(this.listeCourse.includes(motNettoye)){
      alert('Produit déjà dans la liste !')
      this.mot = '';
    }else{
      this.listeCourse.push(this.mot);
      this.mot = '' ;
    }

  }
}
