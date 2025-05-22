import { Component, inject } from '@angular/core';
import { Trainer, WorkingStatus } from '../../../models/trainer';
import { FormsModule } from '@angular/forms';
import { TrainerService } from '../../../core/services/trainer.service';

@Component({
  selector: 'app-add-trainer',
  imports: [FormsModule],
  templateUrl: './add-trainer.component.html',
  styleUrl: './add-trainer.component.scss'
})
export class AddTrainerComponent {
  prenom : string = '';
  nom : string = '';
  avatar : string = '';

  trainerService : TrainerService = inject(TrainerService);

  add() : void{
    let trainerToAdd : Trainer = {
      id : 0,
      firstName : this.prenom,
      lastName : this.nom,
      avatar : this.avatar,
      status : WorkingStatus.Disponible
    }
    this.trainerService.add(trainerToAdd);

  }
}
