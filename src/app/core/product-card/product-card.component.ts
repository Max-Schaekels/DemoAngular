import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from '../../models/produit';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() produit : Produit | undefined;

  @Output() onDelete : EventEmitter<Produit> = new EventEmitter<Produit>();

  delete() : void{
    this.onDelete.emit(this.produit)
  }
}
