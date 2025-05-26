import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TacheService } from '../../core/services/tache.service';
import { Tache } from '../../models/tache';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exo6',
  imports: [RouterLink,CommonModule],
  templateUrl: './exo6.component.html',
  styleUrl: './exo6.component.scss'
})
export class Exo6Component implements OnInit {

  private _tacheService : TacheService = inject(TacheService);

  tacheList : Tache[] = [];


  ngOnInit(): void {
    this.tacheList = this._tacheService.getAll()
      .filter(t => t.status === 'À faire') // Afficher uniquement les tâches à faire
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()); // tri par date de début
  }

  delete(id : number) : void{
    this._tacheService.delete(id);
    this.tacheList = this._tacheService.getAll();
  }

}
