import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp-investor';
  isUserLoginIs = false;
  constructor(
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    this.isUserLoginIs = this.authenticationService.userValue && this.authenticationService.userValue?.access_token? true:false;
  }
}

