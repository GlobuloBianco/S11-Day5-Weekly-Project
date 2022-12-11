import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-in-signup',
  template: `
            <div class="d-flex flex-column align-items-start formContent">
                <h2>Registrati</h2>
                <form class="d-flex flex-column w-100" [formGroup]="signupForm" (ngSubmit)="onSubmit()">
                    <div class="mt-3">
                        <input type="text" class="form-control ps-4" placeholder="Nome e Cognome" formControlName='nome' required />
                        <p class="noSpace" *ngIf="!signupForm.get('email').valid && signupForm.get('email').touched">Inserire un nome</p>
                    </div>
                    <div class="mt-3">
                        <input type="email" class="form-control ps-4" placeholder="Email" formControlName='email' required />
                    </div>
                    <div class="mt-3">
                        <input type="password" class="form-control ps-4" placeholder="Password" formControlName='password' required />
                    </div>
                    <div class="mt-3">
                        <input type="password" class="form-control ps-4" placeholder="Conferma Password" formControlName='conferma' required />
                    </div>
                    <button type="submit" class="btn btn-danger" [disabled]="!signupForm.valid">Accedi</button>
                </form>
                <div class="mt-5 d-flex flex-column text-secondary">
                    <h3 class="h6">Hai già un account Fakeflix?  <span class="text-white pointer" [routerLink]="['/login/in/login']" routerLinkActive="router-link-active">Vai al login</span>.</h3>
                </div>
            </div>
  `,
  styleUrls: ['../in-login/in-login.component.scss']
})
export class InSignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    conferma: new FormControl('', [Validators.required, Validators.minLength(5)])
    }, { validators: this.controllaPassword })
  }

  controllaPassword: ValidatorFn = (signupForm: AbstractControl):  ValidationErrors | null => {
    let pass = signupForm.get('password').value;
    let confermaPass = signupForm.get('conferma').value
    return pass === confermaPass ? null : { notSame: true }
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }

}

