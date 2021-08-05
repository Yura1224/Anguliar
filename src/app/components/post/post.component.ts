import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../models/IPost";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
@Input()
post:IPost;
  constructor(private router: Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {

  }


  gotoDetailsPosts() {
    this.router.navigate(['posts', this.post.id],{state:this.post})
  }
}
