import {Component, OnInit} from '@angular/core';
import {IComment} from "../../models/IComment";
import {CommentsService} from "../../services/comments.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private commentService: CommentsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentService.getCommentByPostId(id).subscribe(value => this.comments = value)
    })
  }


}
