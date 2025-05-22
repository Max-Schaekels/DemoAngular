import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingService } from '../../../core/services/shopping.service';
import { ShoppingItem } from '../../../models/shoppingitem';

@Component({
  selector: 'app-addshoppingitem',
  imports: [FormsModule],
  templateUrl: './addshoppingitem.component.html',
  styleUrl: './addshoppingitem.component.scss'
})
export class AddshoppingitemComponent {
  nom : string = '';

  shoppingService : ShoppingService = inject(ShoppingService);

  add() : void{
    let ShoppingItemToAdd : ShoppingItem = {
      id : 0,
      name : this.nom,
      quantity : 1,
      bought :false
    }
    this.shoppingService.add(ShoppingItemToAdd);

  }

}
