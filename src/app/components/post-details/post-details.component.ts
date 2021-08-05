import {Component, OnInit} from '@angular/core';
import {IPost} from "../models/IPost";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

posts:IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.posts = this.router.getCurrentNavigation()?.extras.state as IPost;

    });

  }
  ngOnInit():void{

  }

  back() {
    history.back()
  }
}
