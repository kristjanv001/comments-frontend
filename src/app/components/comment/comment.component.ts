import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../interfaces/comment';
import { User } from '../../interfaces/user';
import { CardComponent } from '../shared/card/card.component';
import { AvatarComponent } from '../shared/avatar/avatar.component';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CardComponent, AvatarComponent, DialogComponent],
  templateUrl: './comment.component.html'
})
export class CommentComponent {
  @Input() comment!: Comment;
  @Input() currentUser?: User;
}
