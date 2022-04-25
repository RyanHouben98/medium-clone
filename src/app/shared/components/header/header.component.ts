import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {signOutUser, user$} from "../../../core/repositories/auth.repository";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  user: Observable<any> = user$

  logOut() : void {
    signOutUser()
  }
}
