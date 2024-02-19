import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Comment } from "../../interfaces/comment";
import { User } from "../../interfaces/user";
import { CardComponent } from "../shared/card/card.component";
import { AvatarComponent } from "../shared/avatar/avatar.component";
import { DialogComponent } from "../shared/dialog/dialog.component";
import { ButtonComponent } from "../shared/button/button.component";
import { CommentComposerComponent } from "../comment-composer/comment-composer.component";
import { CommentService } from "../../services/comment.service";

@Component({
  selector: "app-comment",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    AvatarComponent,
    DialogComponent,
    ButtonComponent,
    CommentComposerComponent,
  ],
  templateUrl: "./comment.component.html",
})
export class CommentComponent {
  @Input() comment!: Comment;
  @Input() currentUser!: User;
  @Output() deleteComment = new EventEmitter<number>();

  isReplyComposerOpen = false;
  isCommentEditorOpen = false;

  constructor(private commentService: CommentService) {}

  openReplyComposer() {
    this.isReplyComposerOpen = true;
  }

  openCommentEditor() {
    this.isCommentEditorOpen = true;
  }

  vote(voteType: "upvote" | "downvote") {
    const { votedUsers } = this.comment;
    const username = this.currentUser.username;

    if (!votedUsers) {
      const newVotedUsers = { [username]: voteType };

      this.comment.votedUsers = newVotedUsers;
      this.comment.score += voteType === "upvote" ? 1 : -1;
    } else if (votedUsers[username] === voteType) {
      delete votedUsers[username];
      this.comment.score += voteType === "upvote" ? -1 : 1;
    } else {
      votedUsers[username] = voteType;
      this.comment.score += voteType === "upvote" ? 1 : -1;
    }
  }

  hasvoted(voteType: "upvote" | "downvote"): boolean {
    const votedUsers = this.comment.votedUsers || {};

    return votedUsers[this.currentUser?.username || ""] === voteType;
  }

  onDeleteComment() {
    this.deleteComment.emit(this.comment.id);
  }
}
