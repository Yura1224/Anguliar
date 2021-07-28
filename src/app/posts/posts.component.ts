import { Component, OnInit } from '@angular/core';
import {IPost} from "../models/IPost";
import {PostsService} from "../services/posts.service";



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
posts: IPost[];
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts=value)
  }


}
