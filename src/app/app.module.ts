import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {
  CommentComponent,
  CommentsComponent,
  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  UserComponent,
  UserDetailsComponent,
  UsersComponent
} from './components';
import {routes} from "./routes";


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    UserDetailsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
