import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../service/booking.service';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  reactiveForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  isSubmitting: boolean | undefined;
  id: string | undefined;
  user: any;
  userId:any;
  // seat:number|undefined;
  constructor(
    private form: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router,
    private userService:ProfileService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.initForm();
    this.getUsersById(this.userId);
    // this.activatedRoute.params.subscribe((params) => {
    //   this.id = params['id'];
    // });
  }

  initForm() {
    this.reactiveForm = this.form.group({
      fname: [undefined, Validators.required],
      email: [undefined, Validators.required],
      contactNumber: [undefined, Validators.required],
      vehicleNumber: [undefined, Validators.required],
      seat:[1],
    });
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.reactiveForm.controls;
  }

  onSubmitForm(form: any): void {
  this.submitted = true;
    if (this.reactiveForm.valid) {
      // console.log(this.reactiveForm.value)
      console.log(this.reactiveForm.value)
      this.bookingService.bookSeat(form).subscribe(
        (response: any) => {
          console.log("hello");
          console.log(response);
          this.router.navigate(['/client-side/dashboard']);
          console.log("booked successfully",response)

        },
        (error) => {
          console.error(error);
          console.log("Error on bookin",error)
        }
      );
    }
    console.log( this.user);
  }


  getUsersById(userId: number){
    this.userService.getUserById(userId).subscribe({
      next: (response: any) => {
        console.log("Hello Resp",response)
        this.user = response;
        this.reactiveForm.patchValue(response);
      }
    })
  }
}

