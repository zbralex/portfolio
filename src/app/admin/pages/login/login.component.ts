import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitted: boolean | undefined

  constructor(private fb: FormBuilder,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submit() {
    if (this.loginForm.invalid) {
      return
    }
    this.submitted = true;

    this.auth.login(this.loginForm.value).subscribe(resp => {
      if (resp) {
        this.submitted = false
        this.loginForm.reset()
        this.router.navigate(['/admin'])
      }

    })
  }
}
