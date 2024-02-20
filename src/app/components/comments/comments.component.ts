import { Component, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { Observable, of, switchMap } from "rxjs";
import { CommentComponent } from "../../components/comment/comment.component";
import { CommentService } from "../../services/comment.service";
import { CommentComposerComponent } from "../comment-composer/comment-composer.component";
import { CardComponent } from "../shared/card/card.component";
import { Comment } from "../../interfaces/comment";
import { User } from "../../interfaces/user";

@Component({
  selector: "app-comments",
  standalone: true,
  imports: [CommentComponent, CommentComposerComponent, AsyncPipe, CardComponent],
  templateUrl: "./comments.component.html",
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  currentUser$?: Observable<User>;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.getComments();
    this.currentUser$ = this.commentService.getUser();
  }

  getComments(): void {
    this.commentService.getComments().subscribe((commentsData) => {
      this.comments = commentsData;
    });
  }

  add(newCommentBody: string) {
    this.currentUser$
      ?.pipe(
        switchMap((user) => {
          const newComment: Comment = {
            id: 11,
            content: newCommentBody,
            createdAt: "just now",
            score: 0,
            user: {
              image: user.image,
              username: user.username,
            },
            replies: [],
          };
          return this.commentService.addComment(newComment);
        }),
      )
      .subscribe((comment) => {
        this.comments.push(comment);
      });
  }
}
