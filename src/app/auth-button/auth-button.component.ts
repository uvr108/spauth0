import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  imports: [NgIf,AsyncPipe],
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
        Log out
      </button>
    </ng-container>
    <ul *ngIf="auth.user$ | async as user">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>
    <ng-template #loggedOut>
      <button (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
  styleUrl: './auth-button.component.css',
  standalone: true
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}