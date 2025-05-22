import { Component, inject, OnInit } from '@angular/core';
import { Trainer, WorkingStatus } from '../../models/trainer';
import { TrainerService } from '../../core/services/trainer.service';
import { AddTrainerComponent } from "./add-trainer/add-trainer.component";

@Component({
  selector: 'app-demo5',
  imports: [AddTrainerComponent],
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.scss'
})
export class Demo5Component implements OnInit {
  trainers : Trainer[] = [];

  //Avec la v14 une nouvelle façon d'injecter est apparue 
  trainerService : TrainerService = inject(TrainerService);

  statusEnum : typeof WorkingStatus = WorkingStatus;

  //Avant la v14 d'Angular pour injecter un service, on était obliger de passer par un constructeur
  constructor(/*trainerService : TrainerService*/){

  }

  //Méthode appelée quand le compasant apparait à l'écran
  //Pour une bonne pratique, c'est en général ici qu'on fera les appels à nos services pour charger les données mais aussi les abonnements sur les obervables
  ngOnInit(): void {
    this.trainers = this.trainerService.getAll();
  }
  delete(id : number){
    this.trainerService.delete(id);
    //On devra alors remettre à joiur notre liste
    this.trainers = this.trainerService.getAll();

  }

}
