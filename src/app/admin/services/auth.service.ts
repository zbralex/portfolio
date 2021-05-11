import {Injectable} from '@angular/core';
import {Observable} from "rxjs";


import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {USER} from "../interfaces/IUser";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router,) {
  }

  get token(): string | null {
    // @ts-ignore
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logout()
      return null;
    }
    return <string>localStorage.getItem('fb-token')
  }


  login(user: USER): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
    this.router.navigate(['/admin/login'])
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: any | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }

  }

}
