import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../service/client-service.service';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
user: any;
userId:any;
  // usersDetail: Array<any> = new Array<any>();
  details:any;
  constructor( private clientService: ProfileService) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem('userId');
    this.getUsersById(this.userId);
  }

  // listUsers(userId:number){
  //   this.clientService.getUserById(userId).subscribe(
  //     (response: any) =>{
  //       this.usersDetail = response;
  //       console.log(response);
  //     }, (error:any) =>{
  //       console.error('error is:', error)
  //     }
  //   )
  // }

  getUsersById(userId: number){
    this.clientService.getUserById(userId).subscribe({
      next: (response: any) => {
        console.log("Hello Resp",response)
        this.details = response;
      }
    })
  }

}
