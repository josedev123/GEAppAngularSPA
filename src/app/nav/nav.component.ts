import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  apiURL = 'https://localhost:44395';
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {

    return this.authService.login(this.model).subscribe(
      (val: any) => {
        localStorage.setItem('token', val.access_token);
        console.log('POST call successful value returned in body',
                      val);
      },
      response => {
          console.log('POST call in error', response);
      },
      () => {
          console.log('The POST observable is now completed.');
      });
    }

   /* console.log('login-clicked');
    const userData = 'username=' + this.model.username + '&password=' + this.model.password + '&grant_type=password';
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'No-Auth': 'True' });
    console.log(userData);

    return this.httpClient.post(this.apiURL + '/TOKEN', userData, { headers: reqHeader }).subscribe(
      (val) => {
          console.log('POST call successful value returned in body',
                      val);
      },
      response => {
          console.log('POST call in error', response);
      },
      () => {
          console.log('The POST observable is now completed.');
      });*/

loggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}

logout() {
 localStorage.removeItem('token');
 console.log('logged out');
}

}
