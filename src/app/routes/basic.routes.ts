import {Routes} from "@angular/router";

import {CommentsComponent, PostsComponent, UserDetailsComponent, UsersComponent} from "../components";

export let routes: Routes = [
  {path:'users',
    component :UsersComponent,
  children: [
    {path: ":id", component:UserDetailsComponent}
  ]
  },
  // {path:'users/:id', component :UserDetailsComponent},
  // {path:'posts', component :PostsComponent},
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {path: ":id", component: CommentsComponent}
    ]
  }
  ]
