import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpClient: HttpClient) { }
apiURL = 'https://localhost:44395';

login(model: any) {
  const userData = 'username=' + model.username + '&password=' + model.password + '&grant_type=password';
  const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'No-Auth': 'True' });

  return this.httpClient.post(this.apiURL + '/TOKEN', userData, { headers: reqHeader });
}


register(model: any) {
  model.confirmPassword = model.password;
  return this.httpClient.post(this.apiURL + '/api/Account/Register', model);
}

}
