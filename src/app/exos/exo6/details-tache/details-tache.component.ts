import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TacheService } from '../../../core/services/tache.service';
import { Tache } from '../../../models/tache';

@Component({
  selector: 'app-details-tache',
  imports: [RouterLink, CommonModule],
  templateUrl: './details-tache.component.html',
  styleUrl: './details-tache.component.scss'
})
export class DetailsTacheComponent implements OnInit {

  activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  router : Router = inject(Router);
  tacheService : TacheService = inject(TacheService);

  id! : number;
  tache! : Tache | undefined;

  ngOnInit(): void {
    this.id= parseInt(this.activatedRoute.snapshot.params['id']);

    this.tache = this.tacheService.getById(this.id);
    if (!this.tache) {
      this.router.navigateByUrl('/notfound');
      
    }
  }

}
