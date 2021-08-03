import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../models/IPost";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  posts: IPost[];


  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPostsOneUser(id).subscribe(value => this.posts = value);
    });
  }

}
