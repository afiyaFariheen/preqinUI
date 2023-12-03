import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: any;
  error:boolean=false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue && this.authenticationService.userValue?.access_token) {
        this.router.navigate(['/investors']);
    }else{
      this.router.navigate(['/']);
    }
}


  connect(){
    if(!this.username){
this.error = true;
    }else{
      this.error = false
      this.authenticationService.login(this.username)
      .pipe(first())
      .subscribe({
          next: () => {
              // get return url from route parameters or default to '/'
             
              this.router.navigate(['/investors']);
          }
          // error: error => {
          //     this.error = error;
          //     this.loading = false;
          // }
      });
    }

  }

  

}
