import {Component, OnInit} from "@angular/core";
import {Observable, of} from "rxjs";
import {AuthRepository, user$} from "../../../core/repositories/auth.repository";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  user: Observable<any> = user$

  constructor(
    private readonly authRepository: AuthRepository
  ) { }

  logOut() : void {
    this.authRepository.signOutUser();
  }
}
