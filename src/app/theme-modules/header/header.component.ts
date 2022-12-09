import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutRequest } from 'src/app/auth/login/LogoutRequet';
import { AuthService } from 'src/app/client-side/service/auth.service';
import { ProfileService } from 'src/app/client-side/service/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  logoutRequest: LogoutRequest = new LogoutRequest();
  userName:any;

  constructor(private router: Router, private authService: AuthService,private updateService: ProfileService) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('name');
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  getUsersById(userId: number){
    
    this.updateService.getUserById(userId).subscribe({
      next: (response: any) => {
        // console.log("Hello Resp",response);
        this.userName = response.fname;
        console.log("username: ",this.userName)
      }
    })
  }

  logout() {
    console.log('Logout method called');
    const logoutEndpoint = '/users/logout';

    this.logoutRequest.email = localStorage.getItem('Name') as string;
    console.log('get email from localstorage ', this.logoutRequest.email);
    this.authService.logout(this.logoutRequest).subscribe(
      (response: any) => {
        console.log('logout success');

        this.router.navigate(['/auth/login']);

        localStorage.removeItem('Name');
        localStorage.removeItem('userId');
      },
      (error: any) => {
        console.log('Error on sending the data');
        console.error(error);
      }
    );
  }

  onProfile() {
    this.router.navigate(['/client-side/profile']);
  }
}
