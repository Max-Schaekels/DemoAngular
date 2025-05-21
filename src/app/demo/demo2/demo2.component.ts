import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertTempPipe } from '../../core/pipes/convert-temp.pipe';

@Component({
  selector: 'app-demo2',
  imports: [CommonModule, FormsModule, ConvertTempPipe],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss'
})
export class Demo2Component {

  bonjour : string = "Bonjour les dev !";

  prix : number = 12.6548576;

  ajd : Date = new Date();

  temp : number = 0;

  tempOption : string = '';
  //attetnion utilisation du joker à ne pas reproduire par la suite 
  aude : any ={
    prenom : 'Aude',
    nom : 'Beurive',
    dateNaissance : new Date('1989-10-16')
  }
}
