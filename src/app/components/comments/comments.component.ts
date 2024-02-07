import { Component, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { Observable } from 'rxjs';
import { CommentComponent } from "../../components/comment/comment.component";
import { CommentService } from "../../services/comment.service";
import { CommentData, Comment } from "../../interfaces/comment";
import { User } from "../../interfaces/user";

@Component({
  selector: "app-comments",
  standalone: true,
  imports: [CommentComponent, AsyncPipe],
  templateUrl: "./comments.component.html",
})
export class CommentsComponent implements OnInit {
  commentData$?: Observable<CommentData>;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentData$ = this.commentService.getCommentData();
  }

}
