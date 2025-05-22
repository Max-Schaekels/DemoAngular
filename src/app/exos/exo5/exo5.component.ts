import { Component, inject, OnInit } from '@angular/core';
import { ShoppingItem } from '../../models/shoppingitem';
import { ShoppingService } from '../../core/services/shopping.service';
import { AddshoppingitemComponent } from "./addshoppingitem/addshoppingitem.component";
import { ModifshoppingitemComponent } from "./modifshoppingitem/modifshoppingitem.component";

@Component({
  selector: 'app-exo5',
  imports: [AddshoppingitemComponent, ModifshoppingitemComponent],
  templateUrl: './exo5.component.html',
  styleUrl: './exo5.component.scss'
})
export class Exo5Component {

}
