import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/client-side/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  isSubmitting: boolean | undefined;
  submitted: boolean = false;
  constructor(
    private form: FormBuilder,
    private router: Router,
    private registerService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.form.group({
      fname: [undefined, Validators.required],
      email: [undefined, Validators.required],
      contactNumber: [undefined, Validators.required],
      vehicleNumber: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmitForm(user: any) {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.registerService.registerUsers(user).subscribe(
        (response: any) => {
          this.isSubmitting = true;
          this.router.navigate(['/login'])
          console.log('user addded successfully');
        },
        (error: any) => {
          this.isSubmitting = false;
        }
      );
    } else {
      this.isSubmitting = false;
      this.registerForm.reset();
      console.log('Error on adding the data');
    }
  }
}
