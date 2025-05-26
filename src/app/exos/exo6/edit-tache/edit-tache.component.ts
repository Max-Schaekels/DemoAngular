import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TacheService } from '../../../core/services/tache.service';
import { Tache } from '../../../models/tache';

@Component({
  selector: 'app-edit-tache',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './edit-tache.component.html',
  styleUrl: './edit-tache.component.scss'
})
export class EditTacheComponent implements OnInit {
  private _urgenceList : string[] = ['Urgent', 'Normal'];
  private _statusList : string[] = ['Terminée', 'À faire'];

  //injection 
  private _fb : FormBuilder = inject(FormBuilder);
  private _tacheService : TacheService = inject(TacheService);
  private _router : Router = inject(Router);
  activatedRoute : ActivatedRoute = inject(ActivatedRoute);

  id! : number;
  tache! : Tache | undefined;
  editForm! : FormGroup;

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);

    this.tache = this._tacheService.getById(this.id);
    if (!this.tache) {
      this._router.navigateByUrl('/notfound');
      
    }
    this.editForm = this._fb.group({
      name: [this.tache?.name, [Validators.required, Validators.maxLength(100)]],
      description: [this.tache?.description],
      status: [this.tache?.status, [Validators.required, this.statusCheckValidator()]],
      urgence: [this.tache?.urgence, [Validators.required, this.urgenceCheckValidator()]],
      userFirstName: [this.tache?.userFirstName, [Validators.required]],
      startDate: [this.tache?.startDate, [Validators.required]],
      endDate: [this.tache?.endDate]
    }, { validators: [this.endDateCheckValidator()] });
  }
  
  

  update(): void{
    if (this.editForm.valid) {
      let updatedTache : Tache = {
        id : this.id,
        name : this.editForm.get('name')?.value,
        description : this.editForm.get('description')?.value,
        status : this.editForm.get('status')?.value,
        urgence : this.editForm.get('urgence')?.value,
        userFirstName : this.editForm.get('userFirstName')?.value,
        startDate : this.editForm.get('startDate')?.value,
        endDate : this.editForm.get('endDate')?.value
      };
      this._tacheService.update(updatedTache);
      this._router.navigateByUrl('/exo6');
      
    }else{
      this.editForm.markAllAsTouched();
    }
  }



  // Customs Validators : 
  statusCheckValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value && !this._statusList.includes(control.value)) {
        return { 'status': true };

      }
      return null;
    };
  }

  urgenceCheckValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value && !this._urgenceList.includes(control.value)) {
        return { 'urgence': true };

      }
      return null;
    };
  }

  endDateCheckValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const start = group.get('startDate')?.value;
      const end = group.get('endDate')?.value;

      if (!end) {
        return null;
      }

      const startDate = new Date(start);
      const endDate = new Date(end);

      if (endDate < startDate) {
        return { endBeforeStart: true };
      }

      return null;
    };
  }

}
