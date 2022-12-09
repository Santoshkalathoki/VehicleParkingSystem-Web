import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/client-side/service/auth.service';
import { stringify } from 'uuid';
import { LoginResponse } from './LoginResponse';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  isSubmitting: boolean | undefined;
  submitted: boolean = false;
  key: string = 'Name';
  user: any;
  constructor(
    private form: FormBuilder,
    private router: Router,
    private loginService: AuthService,
    private toastr:ToastrService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.form.group({
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
    this.user = localStorage.getItem(this.key);
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onSubmitForm(user: any) {
    this.submitted = true;
    console.log(user);
    if (this.loginForm.valid) {
      this.loginService.login(user).subscribe(
        (response: LoginResponse) => {
          console.log('Login success');
          this.toastr.success('Sucessfully Loged in','success')
          this.router.navigate(['/client-side/dashboard']);

          localStorage.setItem('userId', '' + response?.userId);
          localStorage.setItem('name', '' + response?.name);

          this.isSubmitting = true;
          // console.log('Data added succefully');
        },
        (error: any) => {
          this.isSubmitting = false;
          this.loginForm.reset();
          console.log('Error on sending the data');
        }
      );
    }
  }
}
