import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../interfaces/comment';
import { User } from '../../interfaces/user';
import { CardComponent } from '../shared/card/card.component';
import { AvatarComponent } from '../shared/avatar/avatar.component';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { ButtonComponent } from '../shared/button/button.component';
import { CommentComposerComponent } from '../comment-composer/comment-composer.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CardComponent, AvatarComponent, DialogComponent, ButtonComponent, CommentComposerComponent],
  templateUrl: './comment.component.html'
})
export class CommentComponent {
  @Input() comment!: Comment;
  @Input() currentUser?: User;
  isReplyComposerOpen = false;

  openReplyComposer() {
    this.isReplyComposerOpen = true;
  }
}
