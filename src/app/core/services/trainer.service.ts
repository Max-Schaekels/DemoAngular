import { Injectable } from '@angular/core';
import { Trainer, WorkingStatus } from '../../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private _trainers : Trainer[] = [
      { id : 1, firstName : 'Aude', lastName : 'Beurive', avatar : 'aude.png', birthDate : new Date('1989-10-16'), status : WorkingStatus.Disponible },
      { id : 2, firstName : 'Gavin', lastName : 'Chaineux', avatar : 'gavin.png', birthDate : new Date('1992-10-18'), status : WorkingStatus.Indisponible},
      { id : 3, firstName : 'Aurélien', lastName : 'Strimelle', avatar : 'aurelien.png', birthDate : new Date('1989-11-01'), status : WorkingStatus.Disponible },
      { id : 4, firstName : 'Robin', lastName : 'Pêcheur', avatar : 'robin.png', status : WorkingStatus.Vacances}
    ];
  

  constructor() { }

  getAll() : Trainer[]{
    return this._trainers;
  }

  getById(id : number) : Trainer | undefined {
    return this._trainers.find(trainer => trainer.id === id);
  }

  add(trainer : Trainer) : void{
    //gérer l'id 
    trainer.id = Math.max(...this._trainers.map(t => t.id)) + 1;
    this._trainers.push(trainer);
    //Plus tard, c'est ici qu'on fera un post vers l'api par rexe

  }

  delete(id : number) : void {
    this._trainers = this._trainers.filter(trainer => trainer.id !== id);
  }
}
