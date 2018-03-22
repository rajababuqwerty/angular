import {AccountDetails} from './Accountdetails';
import {User} from './User';
import {UserDetails} from './userDetails';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  private userUrl = '/api';


  public getAdminUsers() {
    return this.http.get<User[]>(this.userUrl + '/admin');
  }

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }
  public submitUser(userDetails) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<AccountDetails[]>(this.userUrl, JSON.stringify(userDetails), httpOptions);
  }

}
