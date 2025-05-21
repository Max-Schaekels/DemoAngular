
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';
@Component({
  selector: 'app-demo3',
  imports: [RouterLink, CommonModule],
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.scss'
})
export class Demo3Component {
  textColor : string = 'darkred';
  niveauColere : number = 0;
  faireJour : boolean = true;
  formateurs : string[] = ['Aude', 'Alex', 'Gavin', 'Robin', 'Aurélien'];
  jourDeLaSemaine : number = new Date('2025-05-21').getDay(); 
  
  products : Product[] = [
    {id : 1, name : 'Pizza 4 fromages', image : 'https://www.herta.fr/sites/default/files/2022-04/DSCF1778.JPG', price : 10.50, pricePromo : 8.99, promo : false}, 
    {id : 2, name : 'Pizza Calzone', image : 'https://assets.afcdn.com/recipe/20161130/7916_w1024h1024c1cx2808cy1872.jpg', price : 12.99, pricePromo : 10, promo : true}, 
    {id : 3, name : 'Pizza Hawaïenne', image : 'https://img.cuisineaz.com/660x660/2016/06/30/i71515-pizza-hawaienne.jpg', price : 9, pricePromo : 9, promo : false}, 
  ]
  changeTextColor() : void {
    //création d'un nombre aléatoire entre 1 et 3
    let rand = Math.floor(Math.random() * 3) + 1;
    if(rand === 1){
      this.textColor = 'darkmagenta';
    }
    else if(rand === 2) {
      this.textColor = 'darkorange';
    }
    else {
      this.textColor = 'darkgreen';
    }
  }
  insulter() : void {
    this.niveauColere++;
  }
}