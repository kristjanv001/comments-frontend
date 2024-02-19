import { Component, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { Observable, of } from "rxjs";
import { CommentComponent } from "../../components/comment/comment.component";
import { CommentService } from "../../services/comment.service";
import { CommentData, Comment } from "../../interfaces/comment";
import { CommentComposerComponent } from "../comment-composer/comment-composer.component";
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: "app-comments",
  standalone: true,
  imports: [CommentComponent, CommentComposerComponent, AsyncPipe, CardComponent],
  templateUrl: "./comments.component.html",
})
export class CommentsComponent implements OnInit {
  commentData$?: Observable<CommentData>;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentData$ = this.commentService.getCommentData();
  }

  removeComment(commentId: number) {
    this.commentService.removeComment(commentId);
  }
}
