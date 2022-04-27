import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthenticationModule {

}
