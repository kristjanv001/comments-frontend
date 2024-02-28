import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Subscription } from "rxjs";
import { Comment } from "../../interfaces/comment";
import { User } from "../../interfaces/user";
import { CardComponent } from "../shared/card/card.component";
import { AvatarComponent } from "../shared/avatar/avatar.component";
import { ButtonComponent } from "../shared/button/button.component";
import { CommentComposerComponent } from "../comment-composer/comment-composer.component";
import { CommentService } from "../../services/comment.service";
import { DeleteModalComponent } from "../delete-modal/delete-modal.component";

@Component({
  selector: "app-comment",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    AvatarComponent,
    ButtonComponent,
    CommentComposerComponent,
    DeleteModalComponent
  ],
  templateUrl: "./comment.component.html",
})
export class CommentComponent {
  @Input() comment!: Comment;
  @Input() parentComment!: Comment;
  @Input() currentUser!: User;
  @Input() addCommentHandler: () => void = () => {};

  isReplyComposerOpen = false;
  isCommentEditorOpen = false;

  commentSubscription?: Subscription;
  editSubscription?: Subscription;

  constructor(private commentService: CommentService) {}

  ngOnDestroy() {
    this.commentSubscription?.unsubscribe();
    this.editSubscription?.unsubscribe();
  }

  openReplyComposer() {
    this.isReplyComposerOpen = true;
  }

  closeReplyComposer() {
    this.isReplyComposerOpen = false;
  }

  openCommentEditor() {
    this.isCommentEditorOpen = true;
  }

  closeCommentEditor() {
    this.isCommentEditorOpen = false;
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

  deleteComment() {
    console.log("deleting...")
  }

  updateComment(updated: string) {
    const editedComment: Comment = {
      ...this.comment,
      content: updated,
      user: {
        ...this.comment.user,
      },
    };

    this.editSubscription = this.commentService.updateComment(this.comment.id, editedComment).subscribe((comment) => {
      this.comment.content = editedComment.content;
    });

    this.closeCommentEditor();
  }

  addReply(replyBody: string) {
    const newReply: Comment = {
      id: this.commentService.genId(),
      content: replyBody,
      createdAt: "just now",
      replyingTo: this.comment.user.username,
      score: 0,
      user: {
        image: this.currentUser.image,
        username: this.currentUser.username,
      },
    };

    this.commentSubscription = this.commentService.addReply(newReply).subscribe((reply) => {
      if (this.comment.replies) {
        this.comment.replies.push(reply);
      } else {
        this.parentComment?.replies?.push(reply);
      }
    });

    this.closeReplyComposer();
  }
}
