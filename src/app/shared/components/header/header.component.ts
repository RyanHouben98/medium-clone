import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {user$} from "../../../core/repositories/auth.repository";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  user: Observable<any> = user$

  constructor(
    private readonly authService: AuthService
  ) { }

  logOut() : void {
    this.authService.logout();
  }
}
