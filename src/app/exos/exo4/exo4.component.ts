import { Component } from '@angular/core';
import { Produit } from '../../models/produit';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../core/product-card/product-card.component';

@Component({
  selector: 'app-exo4',
  imports: [CommonModule,FormsModule,ProductCardComponent],
  templateUrl: './exo4.component.html',
  styleUrl: './exo4.component.scss'
})
export class Exo4Component {
  produits : Produit[] = [];
  pId : number = 1;
  pNom :  string = '';
  pPrice : number = 0;
  pImg : string = '';


  ajouter() :  void{
  if (this.pNom && this.pPrice && this.pImg) {
    const nouveauProduit: Produit = {
      id: this.pId++,
      name: this.pNom,
      price: this.pPrice,
      image: this.pImg
    };
    this.produits.push(nouveauProduit);

    
    this.pNom = '';
    this.pPrice = 0;
    this.pImg = '';
  }

  }

  productToDelete(produit : Produit) : void{
    this.produits = this.produits.filter(p => p !== produit);
  }

}
