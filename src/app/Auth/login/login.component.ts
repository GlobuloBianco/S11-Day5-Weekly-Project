import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="loginBody h-100 text-center">
      <div class="d-flex">
        <h1>
          <img src="../../assets/logo.png" alt="fakeflix logo" width="300px" draggable="false" />
        </h1>
      </div>
      <div class="d-flex justify-content-center">
        <div class="formLogin">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
