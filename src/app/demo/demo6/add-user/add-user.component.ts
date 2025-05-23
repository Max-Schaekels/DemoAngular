import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { first } from 'rxjs';
import { User } from '../../../models/user';

@Component({
  selector: 'app-add-user',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  private _roleList: string[] = ['Admin', 'User'];

  //injections 
  private _fb: FormBuilder = inject(FormBuilder);

  private _userService : UserService = inject(UserService);
  private _router : Router = inject(Router);

  createForm: FormGroup;

  constructor() {
    this.createForm = this._fb.group({
      //nomControl : [valeur, [Validateurs synchrones], [Validateurs asynchrones] ]
      firstname: [null, [Validators.required, Validators.maxLength(100)], []],
      lastname: [null, [Validators.required, Validators.maxLength(100)], []],
      birthdate: [null],
      credits: [null, [Validators.required, Validators.min(0), Validators.max(9_999_999)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-=]).{8,}$/)]],
      confirm: [null, [Validators.required]],
      role: [null, [Validators.required, this.roleCheckValidator()]],
      conditions: [false, [Validators.requiredTrue]]



    }, {validators : [this.confirmPassword()]});
  }

  add(): void {
    if (this.createForm.valid) {
      //TODO : add dans la liste
      let userToAdd : User = {
        id : 0,
        firstName : this.createForm.get('firstname')?.value,
        lastName : this.createForm.get('lastname')?.value,
        birthDate : this.createForm.get('birthdate')?.value,
        credits : this.createForm.get('credits')?.value,
        email : this.createForm.get('email')?.value,
        password : this.createForm.get('password')?.value,
        role : this.createForm.get('role')?.value,
      }
      this._userService.add(userToAdd)
      //TODO : redigirer vers la page avec la liste
      this._router.navigateByUrl('/demo6');

    } else {
      //Va toucher tous les controls
      this.createForm.markAllAsTouched();

    }
  }

  //Customs validators
  roleCheckValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value && !this._roleList.includes(control.value)) {
        return { 'role': true };

      }
      return null;
    };
  }

  confirmPassword() : ValidatorFn {
    return(control : AbstractControl) : ValidationErrors | null => {
      let password : string = control.get('password')?.value;
      let confirmPassword : string = control.get('confirm')?.value;


      if (password && confirmPassword && password !== confirmPassword) {
        return {'checkpassword' : true }
        
      }

      return null;

    }

  }


}
