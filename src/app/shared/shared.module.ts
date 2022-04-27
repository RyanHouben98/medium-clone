import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import {FeedItemComponent} from "./components/feed-item/feed-item.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FeedItemComponent
  ],
  declarations: [
    HeaderComponent,
    FeedItemComponent
  ]
})
export class SharedModule { }
