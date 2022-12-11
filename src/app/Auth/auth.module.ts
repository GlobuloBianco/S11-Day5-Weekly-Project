import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { InLoginComponent } from './in-login/in-login.component';
import { InSignupComponent } from './in-signup/in-signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    InLoginComponent,
    InSignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
