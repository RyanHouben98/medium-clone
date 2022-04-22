import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {isLoggedIn$} from "../../core/repositories/auth.repository";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    isLoggedIn$.subscribe(result => {
      if (result === false) {
        this.router.navigate(['login'])
      }
    })

    return isLoggedIn$
  }
}
