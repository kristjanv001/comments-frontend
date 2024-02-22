import { Component, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { Observable, of, switchMap } from "rxjs";
import { CommentComponent } from "../../components/comment/comment.component";
import { CommentService } from "../../services/comment.service";
import { InMemoryDataService } from "../../services/in-memory-data.service";
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
  currentUser?: User;

  constructor(
    private commentService: CommentService,
    private inMemoryDataService: InMemoryDataService,
  ) {}

  ngOnInit() {
    this.getUser();
    this.getComments();
    // this.currentUser$ = this.commentService.getUser();
  }

  getComments(): void {
    this.commentService.getComments().subscribe((commentsData) => {
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

      this.commentService.addReply(newComment).subscribe((comment) => {
        this.comments.push(comment);
      });
    }
  }
}
