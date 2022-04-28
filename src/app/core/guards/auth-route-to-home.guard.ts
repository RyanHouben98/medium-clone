import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {isLoggedIn$} from "../repositories/auth.repository";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthRouteToHomeGuard implements CanActivate {
  constructor(
    private readonly router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const loggedIn = new BehaviorSubject<boolean>(false)

    isLoggedIn$.subscribe(result => {
      if (result === true) {
        this.router.navigate(['/']);
        loggedIn.next(false)
      } else {
        loggedIn.next(true)
      }
    })

    return loggedIn;
  }
}
