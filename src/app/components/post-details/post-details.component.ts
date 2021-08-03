import { Component } from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent  {

  posts: IPost[];


  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPostsOneUser(id).subscribe(value => this.posts = value);
    });
  }
}
