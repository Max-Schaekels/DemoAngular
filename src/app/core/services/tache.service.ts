import { Injectable } from '@angular/core';
import { Tache } from '../../models/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private _tacheList : Tache[] = [{
    id: 1,
    name: "Préparer la réunion",
    description: "Organiser les documents nécessaires pour la réunion de lundi",
    status: "À faire",
    urgence: "Urgent",
    userFirstName: "Alice",
    startDate: new Date("2025-05-27T09:00:00"),
    endDate: new Date("2025-05-27T11:00:00")
}];

  constructor() { }

  getAll() : Tache[]{
    return this._tacheList;
  }

  getById(id : number) : Tache | undefined{
    return this._tacheList.find(tache => tache.id === id);

  }

  delete(id : number) : void {
    this._tacheList = this._tacheList.filter(tache => tache.id !== id);
  }

  add(tache : Tache) : void{
    tache.id = Math.max(...this._tacheList.map(tache => tache.id)) +1;

    this._tacheList.push(tache);
  }

  update(tache : Tache): void{
    let indexTacheToUpdate : number = this._tacheList.findIndex( t => t.id === tache.id);
    if (indexTacheToUpdate !== -1) {
      
      this._tacheList[indexTacheToUpdate] = tache;
    }

    
  }


}
