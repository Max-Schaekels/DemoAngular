import { Component, inject, OnInit } from '@angular/core';
import { ShoppingItem } from '../../../models/shoppingitem';
import { ShoppingService } from '../../../core/services/shopping.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modifshoppingitem',
  imports: [CommonModule, FormsModule],
  templateUrl: './modifshoppingitem.component.html',
  styleUrl: './modifshoppingitem.component.scss'
})
export class ModifshoppingitemComponent implements OnInit {
  shoppingItems : ShoppingItem[] = [];

  

  shoppingService : ShoppingService = inject(ShoppingService);



  ngOnInit(): void {
    this.shoppingItems = this.shoppingService.getAll();
  }

  addQuantity(shoppingItem : ShoppingItem) :void {
    this.shoppingService.addQuantity(shoppingItem);

  }

  diminuerQuantity(shoppingItem : ShoppingItem) : void{
    this.shoppingService.diminuerQuantity(shoppingItem);
    this.shoppingItems = this.shoppingService.getAll();
  }

  delete(id : number): void{
    this.shoppingService.delete(id);
    this.shoppingItems = this.shoppingService.getAll();
  }

  achat(shoppingItem : ShoppingItem) : void{
    this.shoppingService.achat(shoppingItem);
  }

}
