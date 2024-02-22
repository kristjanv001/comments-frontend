import { Component, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { Subscription } from "rxjs";
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
  currentUser?: User;
  currentUserSubscription?: Subscription;
  commentsSubscription?: Subscription;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.getUser();
    this.getComments();
  }

  ngOnDestroy() {
    this.currentUserSubscription?.unsubscribe();
    this.commentsSubscription?.unsubscribe();
  }

  getComments(): void {
    this.commentsSubscription = this.commentService.getComments().subscribe((commentsData) => {
      this.comments = commentsData;
    });
  }

  getUser(): void {
    this.commentService.getUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  addComment(newCommentBody: string) {
    if (this.currentUser) {
      const newComment: Comment = {
        id: this.commentService.genId(),
        content: newCommentBody,
        createdAt: "just now",
        score: 0,
        user: {
          image: this.currentUser.image,
          username: this.currentUser.username,
        },
        replies: [],
      };

      this.currentUserSubscription = this.commentService.addReply(newComment).subscribe((comment) => {
        this.comments.push(comment);
      });
    }
  }
}
