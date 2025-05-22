import { Injectable } from '@angular/core';
import { ShoppingItem } from '../../models/shoppingitem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private _shoppingItems : ShoppingItem[] = [{id : 1, name : 'Pizza', quantity : 5, bought : false}];

  constructor() { }
  getAll() : ShoppingItem[]{
    return this._shoppingItems;
  }

  add(shoppingItem: ShoppingItem): void {
    const existingItem = this._shoppingItems.find(
      item => item.name.toLowerCase() === shoppingItem.name.toLowerCase()
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newId = this._shoppingItems.length > 0
        ? Math.max(...this._shoppingItems.map(s => s.id)) + 1
        : 1;

      shoppingItem.id = newId;
      shoppingItem.quantity = 1;
      shoppingItem.bought = false;

      this._shoppingItems.push(shoppingItem);
    }

  }

  addQuantity(shoppingItem : ShoppingItem) : void{
    shoppingItem.quantity += 1;
  }

  diminuerQuantity(shoppingItem : ShoppingItem) : void{
    shoppingItem.quantity -= 1;
    if(shoppingItem.quantity === 0){
      this._shoppingItems = this._shoppingItems.filter(sp => sp !== shoppingItem);
    }
  }
}
