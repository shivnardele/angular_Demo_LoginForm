import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../service/authentication.service';
//import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector:"app-login",
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    wrongCredential: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
     //   private alertService: AlertService
    ) {
        //redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        // this is for form inputs validation
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
          console.log("invalid"+this.loginForm.value);
          return;
        } else{
          console.log("valid"+this.loginForm.value);
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  console.log(data)
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                   // this.alertService.error(error);
                    this.loading = false;
                    this.wrongCredential =true;
                    console.log(error);
                },
                ()=>{
                  this.wrongCredential =true;
                });
    }
}


