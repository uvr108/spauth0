import { Component } from '@angular/core';
import { AuthButtonComponent } from "../auth-button/auth-button.component";

@Component({
  selector: 'app-login',
  imports: [AuthButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
