import { Component, inject, OnInit } from '@angular/core';
import { ShoppingItem } from '../../../models/shoppingitem';
import { ShoppingService } from '../../../core/services/shopping.service';


@Component({
  selector: 'app-modifshoppingitem',
  imports: [],
  templateUrl: './modifshoppingitem.component.html',
  styleUrl: './modifshoppingitem.component.scss'
})
export class ModifshoppingitemComponent implements OnInit {
  shoppingItems : ShoppingItem[] = [];

  shoppingService : ShoppingService = inject(ShoppingService);

  ngOnInit(): void {
    this.shoppingItems = this.shoppingService.getAll();
  }

}
