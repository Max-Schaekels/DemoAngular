import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trainer, WorkingStatus } from '../../models/trainer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainer-card',
  imports: [CommonModule],
  templateUrl: './trainer-card.component.html',
  styleUrl: './trainer-card.component.scss'
})
export class TrainerCardComponent {
  // Permet d'indiquer qu'on va recevoir un formateur via le parent du composant
  @Input() trainer : Trainer | undefined;

  //Output sera toujours un évènement
  @Output() onSelected : EventEmitter<Trainer> =  new EventEmitter<Trainer>();

  isAvailable() : boolean{
    return this.trainer?.status === WorkingStatus.Disponible;
  }

  onVacation() : boolean {
    return this.trainer?.status === WorkingStatus.Vacances;
  }

  selectTrainer() : void{
    //On déclenche l'évènement en envoyant le formateur
    this.onSelected.emit(this.trainer)
  }
}
