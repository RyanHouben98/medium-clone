import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./components/register/register.component";
import {AuthRouteToHomeGuard} from "./guards/auth-route-to-home.guard";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [AuthRouteToHomeGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthRouteToHomeGuard] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CoreRoutingModule { }
