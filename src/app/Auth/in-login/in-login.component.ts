import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-login',
  template: `
            <div class="d-flex flex-column align-items-start formContent">
                <h2>Accedi</h2>
                <form class="d-flex flex-column w-100">
                    <div class="mt-3">
                        <input type="email" class="form-control ps-4" placeholder="Email" required />
                    </div>
                    <div class="mt-3">
                        <input type="password" class="form-control ps-4" placeholder="Password" required />
                    </div>
                    <button class="btn btn-danger">Accedi</button>
                </form>
                <div class="mt-5 d-flex flex-column text-secondary">
                    <h3 class="h6">Prima volta su Fakeflix? <span class="text-white pointer" [routerLink]="['/login/in/signup']" routerLinkActive="router-link-active">Registrati</span>.</h3>
                    <p class="mt-4 h6">
                        Questa pagina non è protetta da Google reCAPTCHA perché idk.<span id="idk" [routerLink]="['/meme']"> Non scoprire di più.</span></p>
                </div>
            </div>
  `,
  styleUrls: ['./in-login.component.scss']
})
export class InLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
