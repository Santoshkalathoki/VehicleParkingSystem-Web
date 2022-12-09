import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountService } from '../service/count.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  count:any;
  countDetail:any

  constructor(private countService:CountService,
    private router: Router,) { }

  ngOnInit(): void {
    this.getBooking();
  }


  getBooking():void{
    this.countService.countSeat(this.count).subscribe(
    (response: any) => {
      console.log(response);
      this.countDetail = response.seats;
      this.router.navigate(['/client-side/dashboard']);
    },
    (error) => {
      console.error(error);
    }
  );
  }

}
