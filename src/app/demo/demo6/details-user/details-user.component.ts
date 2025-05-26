import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-user',
  imports: [RouterLink, CommonModule],
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.scss'
})
export class DetailsUserComponent implements OnInit {

  //ActivatedRoute permet de récupéré des informations sur la route actuellement active
  activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  router : Router = inject(Router);
  userService : UserService = inject(UserService)

  id! : number;
  user! : User | undefined;

  ngOnInit(): void {
    //this.activatedRoute.snapshot.params['id'] permet de récupérer le paramètre id de la route actuelle
    //attention quand on récupère un paramètre de route, il sera toujours sous forme de string
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);

    // le + devant une variable fait un parseInt
    // this.id = +this.activatedRoute.snapshot.params['id'];
    this.user = this.userService.GetById(this.id);

    // Si le getById n'a pas retourner de user, nous redirige vers 404 not foutn
    if(!this.user){
      this.router.navigateByUrl('/notfound');

    }
  }

}
