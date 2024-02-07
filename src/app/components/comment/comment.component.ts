import { Component, Input } from '@angular/core';
import { Comment } from '../../interfaces/comment';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html'
})
export class CommentComponent {
  @Input() comment!: Comment;
  @Input() currentUser?: User;
}
