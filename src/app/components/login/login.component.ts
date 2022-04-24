import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthRepository} from "../../core/repositories/auth.repository";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  private returnUrl: string;

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit() : void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() : void {
    this.authRepository.signInUser(this.form.controls['email'].value)
    this.router.navigateByUrl(this.returnUrl);
  }
}
