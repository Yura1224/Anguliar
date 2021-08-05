import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {

  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  UserComponent,
  UserDetailsComponent,
  UsersComponent
} from './components';
import {UserDeactivatorService} from "./components/services/user-deactivator.service";


let routes: Routes = [
  {path: 'users', component: UsersComponent, canDeactivate:[UserDeactivatorService] },
  {path: 'users/:id', component: UserDetailsComponent, canActivate:[UserDeactivatorService]},
  // {path: 'users', redirectTo: '', pathMatch: 'full '},
  {path: 'posts', component: PostsComponent, canDeactivate:[UserDeactivatorService]},
  {path: 'posts/:id', component: PostDetailsComponent,canActivate:[UserDeactivatorService]},
  // {path: 'posts', redirectTo: '', pathMatch: 'full '}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    UserDetailsComponent,
    PostComponent,
    PostDetailsComponent,

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
