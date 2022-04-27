import {NgModule} from "@angular/core";
import {FeedComponent} from "./components/feed/feed.component";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    FeedComponent
  ]
})
export class FeedModule { }
