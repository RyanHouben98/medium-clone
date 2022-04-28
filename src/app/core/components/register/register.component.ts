import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form = new FormGroup({
    emailAddress: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    confirmPassword: new FormControl(null, Validators.required),
  });

  constructor(
    private readonly authService: AuthService
  ) { }

  public onSubmit() : void {
    let registerSubmitInfo = {
      emailAddress: this.form.controls['emailAddress'].value,
      password: this.form.controls['password'].value,
      confirmPassword: this.form.controls['confirmPassword'].value
    }

    if (registerSubmitInfo.password !== registerSubmitInfo.confirmPassword) {
      alert("Password do not match")
      return
    }

    this.authService.register(registerSubmitInfo.emailAddress, registerSubmitInfo.password)
  }

}
