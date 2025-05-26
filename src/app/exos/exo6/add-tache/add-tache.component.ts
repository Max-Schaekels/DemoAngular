import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TacheService } from '../../../core/services/tache.service';
import { Tache } from '../../../models/tache';

@Component({
  selector: 'app-add-tache',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-tache.component.html',
  styleUrl: './add-tache.component.scss'
})
export class AddTacheComponent {
  private _urgenceList : string[] = ['Urgent', 'Normal'];
  private _statusList : string[] = ['Terminée', 'À faire'];

  //injections
  private _fb : FormBuilder = inject(FormBuilder);
  private _tacheService : TacheService = inject(TacheService);
  private _router : Router = inject(Router);

  createForm : FormGroup;

  constructor() {
    this.createForm = this._fb.group({
      name : [null,[Validators.required, Validators.maxLength(100)]],
      description : [null],
      status : [null, [Validators.required, this.statusCheckValidator()]],
      urgence : [null, [Validators.required, this.urgenceCheckValidator()]],
      userFirstName : [null, [Validators.required]],
      startDate : [null,[Validators.required]],
      endDate : [null]
    }, {validators : [this.endDateCheckValidator()]})
  }

  add(): void {
    if(this.createForm.valid){
      let tacheToAdd : Tache = {
        id : 0,
        name : this.createForm.get('name')?.value,
        description : this.createForm.get('description')?.value,
        status : this.createForm.get('status')?.value,
        urgence : this.createForm.get('urgence')?.value,
        userFirstName : this.createForm.get('userFirstName')?.value,
        startDate : this.createForm.get('startDate')?.value,
        endDate : this.createForm.get('endDate')?.value
      }
      this._tacheService.add(tacheToAdd);
      this._router.navigateByUrl('/exo6');
    }else{
      this.createForm.markAllAsTouched();
    }
  }

  // Customs Validators : 
  statusCheckValidator() : ValidatorFn{
    return (control : AbstractControl) : ValidationErrors | null => {

      if (control.value && !this._statusList.includes(control.value)) {
        return { 'status' : true};
        
      }
      return null;
    }
  }

  urgenceCheckValidator() : ValidatorFn{
    return (control : AbstractControl) : ValidationErrors | null => {

      if (control.value && !this._urgenceList.includes(control.value)) {
        return { 'urgence' : true};
        
      }
      return null;
    }
  }

  endDateCheckValidator() : ValidatorFn{
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
