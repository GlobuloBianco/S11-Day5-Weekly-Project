import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InLoginComponent } from './in-login/in-login.component';
import { InSignupComponent } from './in-signup/in-signup.component';
import { MemeComponent } from './in-login/meme';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    children: [
      {
        path: "in/login",
        component: InLoginComponent
      },
      {
        path: "in/signup",
        component: InSignupComponent
      }
    ]
  },
  {
    path: "meme",
    component: MemeComponent
  },
  {
    path: "**",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
