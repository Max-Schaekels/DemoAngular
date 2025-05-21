import { Component } from '@angular/core';
import { Trainer } from '../../models/trainer';
import { WorkingStatus } from '../../models/trainer';
import { TrainerCardComponent } from '../../core/trainer-card/trainer-card.component';

@Component({
  selector: 'app-demo4',
  imports: [TrainerCardComponent],
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.scss'
})
export class Demo4Component {
  trainers : Trainer[] = [
    { id : 1, firstName : 'Aude', lastName : 'Beurive', avatar : 'aude.png', birthDate : new Date('1989-10-16'), status : WorkingStatus.Disponible },
    { id : 2, firstName : 'Gavin', lastName : 'Chaineux', avatar : 'gavin.png', birthDate : new Date('1992-10-18'), status : WorkingStatus.Indisponible},
    { id : 3, firstName : 'Aurélien', lastName : 'Strimelle', avatar : 'aurelien.png', birthDate : new Date('1989-11-01'), status : WorkingStatus.Disponible },
    { id : 4, firstName : 'Robin', lastName : 'Pêcheur', avatar : 'robin.png', status : WorkingStatus.Vacances}
  ];

  trainerOfTheDay : string = '...';

  setupTrainer(trainer : Trainer) : void {
    this.trainerOfTheDay = trainer.firstName;
  }

}
