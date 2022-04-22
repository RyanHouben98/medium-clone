import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthRepository} from "../../core/repositories/auth.repository";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly router: Router
  ) { }

  onSubmit() : void {
    this.authRepository.signInUser(this.form.controls['email'].value)
    this.router.navigate(['/'])
  }
}
